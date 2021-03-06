import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import NavMain from '../NavMain/NavMain';
import Navigation from '../Navigation/Navigation';
import burger from '../../images/burger-btn.svg';

function Header({ openBurgerMenu, loggedIn  }) {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={headerLogo} alt='Логотип Место' className='header__logo' />
      </Link>

      {!loggedIn ? <NavMain /> : <Navigation />}
      {!loggedIn ? (
        ''
      ) : (
        <img
          onClick={openBurgerMenu}
          src={burger}
          alt='Иконка бургер меню'
          className='header__burger'
        />
      )}
    </header>
  );
}

export default Header;
