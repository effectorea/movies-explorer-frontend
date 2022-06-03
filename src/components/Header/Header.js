import React from "react";
import './Header.css';
import headerLogo from "../../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";

function Header({width}) {
  return (
      <header className='header'>
        <img src={headerLogo} alt='Логотип Место' className='header__logo' />
        <h2>{ width <= '768' ? 'Hello' : 'Fuck off'}</h2>
        <div className="header__twin"></div>
      </header>
  );
}

export default Header;