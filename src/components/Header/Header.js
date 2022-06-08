import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { useLocation } from 'react-router-dom';
import NavMain from '../NavMain/NavMain';
import Navigation from '../Navigation/Navigation';

function Header({ width }) {
  const location = useLocation();
  return (
    <header className='header'>
      <img src={headerLogo} alt='Логотип Место' className='header__logo' />
      { location.pathname === "/" ? <NavMain/> : <Navigation/>}  
    </header>
  );
}

export default Header;
