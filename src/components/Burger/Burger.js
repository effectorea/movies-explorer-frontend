import React, { useEffect } from 'react';
import './Burger.css';
import { Link } from 'react-router-dom';
import AccBtn from '../AccBtn/AccBtn';

function Burger({ isOpen, onClose }) {

    const handleEscClose = (e) => {
        if (
          e.key === "Escape" ||
          e.target.classList.contains("burger__close") ||
          e.target.classList.contains("burger__menu_active")
        ) {
          onClose(e);
        }
      };

      useEffect(() => {
        if (isOpen) {
          document.addEventListener("keydown", handleEscClose);
          document.addEventListener("mousedown", handleEscClose);
          return () => {
            document.removeEventListener("keydown", handleEscClose);
            document.removeEventListener("mousedown", handleEscClose);
          };
        }
      });

  return (
    <>
      <div id="burgerMenu"className={isOpen ? 'burger__menu burger__menu_active' : 'burger__menu'}>
        <div className='burger__content'>
          <ul className='burger__links'>
            <li className='burger__link'>
              <Link className='burger__link-unit' to='/'>
                Главная
              </Link>
            </li>
            <li className='burger__link'>
              <Link className='burger__link-unit' to='/movies'>
                Фильмы
              </Link>
            </li>
            <li className='burger__link'>
              <Link className='burger__link-unit' to='/saved-movies'>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <AccBtn/>
          <button  onClick={onClose} type="button" className="burger__close"></button>
        </div>
      </div>
    </>
  );
}

export default Burger;
