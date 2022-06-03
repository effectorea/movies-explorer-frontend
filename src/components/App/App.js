import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import useWindowWidth from '../../utils/useWindowWidth';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const width = useWindowWidth();

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header width={width} />
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
