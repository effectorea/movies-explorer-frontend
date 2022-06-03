import React, { useState, useEffect } from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/sign-up'>
            <Register />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
