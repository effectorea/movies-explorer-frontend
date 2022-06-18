import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
      Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <nav className='footer__navigation'>
        <span className='footer__copyright'>&copy; 2022</span>
        <ul className='footer__links'>
          <li>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru'
              target='_blank'
              rel='noopener noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/effectorea'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://www.facebook.com/profile.php?id=100064595025143'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;