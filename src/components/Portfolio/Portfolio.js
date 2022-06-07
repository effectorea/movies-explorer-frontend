import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__elements'>
        <li className='portfolio__element'>
          <a
            className='portfolio__link'
            href='https://github.com/effectorea/how-to-learn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__element_description'>Статичный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__link'
            href='https://effectorea.github.io/yet-travel-project/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__element_description'>Адаптивный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__link'
            href='https://effectorea.github.io/mesto/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__element_description'>
              Одностраничное приложение
            </p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
