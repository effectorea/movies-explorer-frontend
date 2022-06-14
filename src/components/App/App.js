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
import NotFound from "../NotFound/NotFound";
import Profile from '../../Profile/Profile';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  function handleLoggingIn({ email, password }) {
    history.push('/movies');
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
          <Route exact path='/movies'>
            <Movies
              burgerMenu={burgerMenu}
              openBurgerMenu={openBurgerMenu}
              closeBurgerMenu={closeBurgerMenu}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              burgerMenu={burgerMenu}
              openBurgerMenu={openBurgerMenu}
              closeBurgerMenu={closeBurgerMenu}
            />
          </Route>
          <Route exact path='/profile'>
            <Profile
              burgerMenu={burgerMenu}
              openBurgerMenu={openBurgerMenu}
              closeBurgerMenu={closeBurgerMenu}
            />
          </Route>
          <Route path='/sign-up'>
            <Register />
          </Route>
          <Route path='/sign-in'>
            <Login onLogin={handleLoggingIn}/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
