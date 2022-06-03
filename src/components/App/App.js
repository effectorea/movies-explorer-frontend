import React, { useState, useEffect } from 'react';
import './App.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Route, Switch } from "react-router-dom";
import Header from '../Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
