import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
    return (
        <ul className='promo__navtab'>
            <a href='#aboutProject' className='promo__navtab-list_item'>
              О&#160;проекте
            </a>
            <Link to='#' className='promo__navtab-list_item'>
              Технологии
            </Link>
            <Link to='#' className='promo__navtab-list_item'>
              Студент
            </Link>
          </ul>
    )
}

export default NavTab;