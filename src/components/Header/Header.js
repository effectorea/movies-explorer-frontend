import React from "react";
import './Header.css';
import headerLogo from "../../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";

function Header() {
  return (
      <header className='header'>
        <img src={headerLogo} alt='Логотип Место' className='header__logo' />
        <div className="header__twin"></div>
      </header>
  );
}

export default Header;