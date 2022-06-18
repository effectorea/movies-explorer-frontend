import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function NavMain() {
    return (
        <div className='header__twin'>
        <ul className='header__twin-list'>
          <li>
            <Link to='/sign-up' className='header__twin-list_registration'>
              Регистрация
            </Link>
          </li>
          <li>
            <Link to='/sign-in' className='header__twin-list_enter'>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavMain;