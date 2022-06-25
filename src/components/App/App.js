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

function App() {
  const history = useHistory();
  const checkbox = useRef();
  const width = useWindowWidth();
  const [currentUser, setCurrentUser] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [searchMovies, setSearchMovies] = useLocalStorage('searchMovies', []); //главные
  const [movies, setMovies] = useLocalStorage('movies', []); //найденные фильмы
  const [filteredMovies, setFilteredMovies] = useLocalStorage(
    'filteredMovies',
    []
  );
  const [renderedMovies, setRenderedMovies] = useLocalStorage(
    'renderedMovies',
    []
  ); //отрисованные фильмы
  const [savedMovies, setSavedMovies] = useState([]); //сохраненные фильмы

  const [countMovies, setCountMovies] = useState(1);

  const [isShortMovie, setIsShortMovie] = useLocalStorage('checkbox', false);
  const [isSearchValue, setIsSearchValue] = useLocalStorage('search', '');
  const [isPreloader, setIsPreloader] = useState(false);

  const jwt = localStorage.getItem('jwt');

  const location = useLocation();

  

  const handleUpdateUser = useCallback(
    (info) => {
      MainApi.setUserInfo(info, jwt)
        .then((res) => {
          setCurrentUser(res);
          closeEditPopup();
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке данных пользователя ${err}`);
        });
    },
    [jwt]
  );

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((res) => {
        setSearchMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setSearchMovies]);

  useEffect(() => {
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push('/movies');
          } else {
            localStorage.removeItem(jwt);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [history, jwt, handleUpdateUser]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка при загрузке данных ${err}`));
    }
  }, [loggedIn, jwt]);

  useEffect(() => {
    if (jwt) {
      MainApi.getSavedMovies(jwt)
        .then((res) => {
          if (res) {
            setSavedMovies(res);
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [jwt, setSavedMovies]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setIsPreloader(true);
    if (location.pathname === '/movies') {
      moviesApi
        .getMovies()
        .then((res) => {
          setIsPreloader(false);
          console.log(res);
          const moviesList = res.filter((movie) =>
            movie.nameRU
              .toString()
              .toLowerCase()
              .includes(isSearchValue.toString().toLowerCase())
          );
          setMovies(moviesList);
          console.log(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      MainApi.getSavedMovies(jwt)
        .then((res) => {
          if (res) {
            setIsPreloader(false);
            const searchSaved = res.filter((movie) =>
              movie.nameRU
                .toString()
                .toLowerCase()
                .includes(isSearchValue.toString().toLowerCase())
            );
            setSavedMovies(searchSaved);
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isSearchValue, jwt, location.pathname, movies, setMovies])


  const countStartMovies = useCallback(() => {
    if (width >= 1280) {
      return 12;
    }
    if (width >= 757) {
      return 8;
    }
    return 5;
  }, [width])

  React.useEffect(() => {
    const movies = countStartMovies();

    if (localStorage.getItem('movies')) {
      setRenderedMovies(
        JSON.parse(localStorage.getItem('movies')).slice(0, movies)
      );
    }
  }, [setRenderedMovies, handleSearch, countStartMovies]);

  function openEditPopup() {
    setIsEditProfilePopupOpen(true);
  }
  function closeEditPopup() {
    setIsEditProfilePopupOpen(false);
  }

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  function handleRegistration({ name, email, password }) {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          history.push('/sign-in');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoggingIn({ email, password }) {
    MainApi.login(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.token) {
          setCurrentUser(res.user);
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
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

  function filterMovies() {
    setIsPreloader(true);
    if (checkbox.current.checked) {
      if (location.pathname === '/movies') {
        const shortMovies = renderedMovies.filter((movie) => movie.duration <= 40);
        setFilteredMovies(shortMovies);
        setIsPreloader(false);
      } else {
        const shortMovies = savedMovies.filter((movie) => movie.duration <= 40);
        setSavedMovies(shortMovies);
        setIsPreloader(false);
      }
    } else {
      MainApi.getSavedMovies(jwt).then((res) => {
        setIsPreloader(false);
        setSavedMovies(res);
      });
      let searchedMov = JSON.parse(localStorage.getItem('movies'));
      setMovies(searchedMov);
    }
  }

  function moviesCount() {
    if (width >= 1280) {
      return 3;
    }
    return 2;
  }

  function loadMoreMovies() {
    setIsPreloader(true);
    const mov = countStartMovies();
    setRenderedMovies(
      JSON.parse(localStorage.getItem('movies')).slice(0, mov + countMovies * moviesCount())
    );
    setCountMovies(countMovies + 1);
    setIsPreloader(false);
  }


  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            exact
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
            renderedMovies={renderedMovies}
            onMovieLike={handleCardLike}
            onMovieDelete={handleMovieDelete}
            onSearchMovies={handleSearch}
            onFilter={filterMovies}
            movies={isSearchValue ? movies : savedMovies}
            isPreloader={isPreloader}
            checkbox={checkbox}
            filteredMovies={filteredMovies}
            onLoadMore={loadMoreMovies}
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            burgerMenu={burgerMenu}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
            isShortMovie={isShortMovie}
            setIsShortMovie={setIsShortMovie}
            isSearchValue={isSearchValue}
            setIsSearchValue={setIsSearchValue}
            savedMovies={savedMovies}
            onMovieLike={handleCardLike}
            onMovieDelete={handleMovieDelete}
            onSearchMovies={handleSearch}
            onFilter={filterMovies}
            isPreloader={isPreloader}
            checkbox={checkbox}
          />
          <ProtectedRoute
            exact
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
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeEditPopup}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
