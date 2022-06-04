import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { useLocation } from 'react-router-dom';
import NavMain from '../NavMain/NavMain';

function Header({ width }) {
  const location = useLocation();
  return (
    <header className='header'>
      <img src={headerLogo} alt='Логотип Место' className='header__logo' />
      { location.pathname === "/" ? <NavMain/> : "" }  
    </header>
  );
}

export default Header;
