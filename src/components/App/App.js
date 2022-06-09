import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import useWindowWidth from '../../utils/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  

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
            <Movies/>
          </Route>
          <Route path='/sign-up'>
            <Register />
          </Route>
          <Route path='/sign-in'>
            <Login />
          </Route>
        </Switch>
        
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
