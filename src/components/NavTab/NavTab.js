import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <ul className='promo__navtab'>
            <a href='#aboutProject' className='promo__navtab-list_item'>
              О&#160;проекте
            </a>
            <a href='#techs' className='promo__navtab-list_item'>
              Технологии
            </a>
            <a href='#aboutMe' className='promo__navtab-list_item'>
              Студент
            </a>
          </ul>
    )
}

export default NavTab;