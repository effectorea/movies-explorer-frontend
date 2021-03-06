import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import AccBtn from '../AccBtn/AccBtn';

function Navigation() {
  return (
    <nav className='navigaion__set'>
      <ul className='navigation__links'>
        <li className='navigation__link'>
          <Link className='navigation__link_movies' to='/movies'>
            Фильмы
          </Link>
        </li>
        <li className='navigation__link'>
          <Link className='navigation__link_saved' to='/saved-movies'>
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <AccBtn/>
    </nav>
  );
}

export default Navigation;
