import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import useWindowWidth from '../../utils/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MainApi } from '../../utils/MainApi';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            console.log(res)
            setLoggedIn(true);
            setCurrentUser(res);
            history.push('/movies');
          } else {
            localStorage.removeItem(jwt);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [history, jwt]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          console.log(res);
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка при загрузке данных ${err}`));
    }
  }, [loggedIn, jwt]);

  function openEditPopup() {
    setIsEditProfilePopupOpen(true);
    console.log(isEditProfilePopupOpen);
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
        console.log(res.user)
        if (res.token) {
          setCurrentUser(res.user);
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
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
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            burgerMenu={burgerMenu}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
            currentUser={currentUser}
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
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
