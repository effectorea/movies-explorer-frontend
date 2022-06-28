import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MainApi } from '../../utils/MainApi';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { moviesApi } from '../../utils/MoviesApi';
import { useLocation } from 'react-router-dom';
import useWindowWidth from '../../utils/useWindowWidth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Burger from '../Burger/Burger';

function App() {
  const history = useHistory();
  const checkbox = useRef();
  const width = useWindowWidth();
  const [currentUser, setCurrentUser] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInitial, setIsInitial] = useState(false);

  const [movies, setMovies] = useLocalStorage('movies', []); //найденные фильмы
  const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []); //сохраненные фильмы

  const [countMovies, setCountMovies] = useState(1);

  const [isShortMovie, setIsShortMovie] = useLocalStorage('checkbox', false);
  const [isSearchValue, setIsSearchValue] = useLocalStorage('search', '');
  const [isShortSavedMovie, setIsShortSavedMovie] = useState(false);
  const [searchValueForSavedMovie, setSearchValueForSavedMovie] = useState('');
  const [isPreloader, setIsPreloader] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [text, setText] = useState('');

  const jwt = localStorage.getItem('jwt');

  const location = useLocation();

  const handleUpdateUser = useCallback(
    (info) => {
      MainApi.setUserInfo(info, jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            closePopups();
            setIsInfoTooltipOpen(true);
            setStatus(true);
          }
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке данных пользователя ${err}`);
          closePopups();
          setIsInfoTooltipOpen(true);
          setStatus(false);
        });
    },
    [jwt]
  );
  const getSavedMovies = (jwt) =>
    MainApi.getSavedMovies(jwt)
      .then((res) =>
        Array.isArray(res)
          ? res.filter(({ owner }) => currentUser._id === owner)
          : []
      )
      .catch(console.error);
  const getSearchMovies = () => {
    const search =
      location.pathname === '/movies'
        ? isSearchValue
        : searchValueForSavedMovie;
    let items = location.pathname === '/movies' ? movies : savedMovies;

    return items.filter((movie) =>
      movie.nameRU
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  };
  const getFilteredMovies = () => {
    let isShort =
      location.pathname === '/movies' ? isShortMovie : isShortSavedMovie;
    let items = getSearchMovies();

    if (isShort) {
      items = items.filter((movie) => movie.duration <= 40);
    }

    return items;
  };
  const countStartMovies = () => {
    if (width >= 1280) {
      return 12;
    }
    if (width >= 757) {
      return 8;
    }
    return 5;
  };
  const moviesCount = () => {
    if (width >= 1280) {
      return 3;
    }
    return 2;
  };
  const getRenderMovies = () => {
    return getFilteredMovies().slice(
      0,
      countStartMovies() + countMovies * moviesCount()
    );
  };

  useEffect(() => {
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            console.log('currentUser', res);
          } else {
            localStorage.removeItem(jwt);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsInitial(true));
    } else {
      setIsInitial(true);
    }
  }, [jwt, handleUpdateUser]);

  useEffect(() => {
    if (loggedIn && !currentUser._id) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка при загрузке данных ${err}`));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (currentUser._id) {
      getSavedMovies(jwt).then((res) => setSavedMovies(res));
    }
  }, [currentUser]);

  useEffect(() => {
    if (location.pathname !== '/movies') {
      setIsShortSavedMovie(false);
      setSearchValueForSavedMovie('');
    }
  }, [history.location]);

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      console.log('handleSearch');
      setIsPreloader(true);
      if (location.pathname === '/movies') {
        moviesApi
          .getMovies()
          .then((res) => {
            console.log('getMovies', res);
            setMovies(res);
          })
          .catch(console.log)
          .finally(() => setIsPreloader(false));
      } else {
        getSavedMovies(jwt)
          .then((res) => {
            console.log('getSavedMovies', res);
            setSavedMovies(res);
          })
          .finally(() => setIsPreloader(false));
      }
    },
    [isSearchValue, jwt, location.pathname]
  );

  function openEditPopup() {
    setIsEditProfilePopupOpen(true);
  }

  function clearForm() {
    setName('');
    setEmail('');
  }

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    clearForm();
    setIsInfoTooltipOpen(false);
    setText('');
  }

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  function handleRegistration(newUser) {
    MainApi.register(newUser.name, newUser.email, newUser.password)
      .then((res) => {
        if (res) {
          console.log(res);
          handleLoggingIn(newUser);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.toString() === 'Ошибка: 409') {
          setIsInfoTooltipOpen(true);
          setStatus(false);
          setText('Такая почта уже есть в базе!')
        }
        setIsInfoTooltipOpen(true);
        setStatus(false);
      });
  }

  function handleLoggingIn(user) {
    MainApi.login(user.email, user.password)
      .then((res) => {
        console.log(res.user);
        if (res.token) {
          setCurrentUser(res.user);
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          setIsInfoTooltipOpen(true);
          setStatus(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipOpen(true);
        setStatus(false);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    setIsShortMovie(false);
    setIsSearchValue('');
  }

  const handleCardLike = useCallback(
    (movie) => {
      if (jwt) {
        MainApi.saveMovie(movie, jwt)
          .then((res) => {
            setSavedMovies([res, ...savedMovies]);
          })
          .catch((err) => {
            console.log(err);
            
          });
      }
    },
    [jwt, savedMovies]
  );

  function handleMovieDelete(movieId) {
    if (jwt) {
      MainApi.deleteMovie(movieId, jwt)
        .then(() => {
          const newMovies = savedMovies.filter(
            (movie) => movie._id !== movieId
          );
          setSavedMovies(newMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function loadMoreMovies() {
    setCountMovies(countMovies + 1);
  }

  if (!isInitial) {
    return <div></div>;
  }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} openBurgerMenu={openBurgerMenu} />
            <Main />
            <Footer />
            <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            burgerMenu={burgerMenu}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
            isShortMovie={isShortMovie}
            setIsShortMovie={setIsShortMovie}
            isSearchValue={isSearchValue}
            setIsSearchValue={setIsSearchValue}
            savedMovies={savedMovies}
            renderedMovies={getRenderMovies()}
            onMovieLike={handleCardLike}
            onMovieDelete={handleMovieDelete}
            onSearchMovies={handleSearch}
            isPreloader={isPreloader}
            checkbox={checkbox}
            filteredMovies={getFilteredMovies()}
            onLoadMore={loadMoreMovies}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            burgerMenu={burgerMenu}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
            isShortMovie={isShortSavedMovie}
            setIsShortMovie={setIsShortSavedMovie}
            isSearchValue={searchValueForSavedMovie}
            setIsSearchValue={setSearchValueForSavedMovie}
            savedMovies={getFilteredMovies()}
            onMovieLike={handleCardLike}
            onMovieDelete={handleMovieDelete}
            onSearchMovies={handleSearch}
            isPreloader={isPreloader}
            checkbox={checkbox}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            burgerMenu={burgerMenu}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
            openEditPopup={openEditPopup}
            onSignOut={handleSignOut}
            currentUser={currentUser}
            isPreloader={isPreloader}
          />
          <Route path='/sign-up'>
            <Register onRegister={handleRegistration} />
          </Route>
          <Route path='/sign-in'>
            <Login onLogin={handleLoggingIn} />
          </Route>
          <Route path='*' loggedIn={loggedIn}>
            <NotFound />
          </Route>
        </Switch>
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closePopups}
          onUpdateUser={handleUpdateUser}
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
        />
        <InfoTooltip
          status={status}
          onClose={closePopups}
          isOpen={isInfoTooltipOpen}
          text={text}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
