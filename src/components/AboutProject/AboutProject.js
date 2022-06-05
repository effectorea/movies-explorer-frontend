import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about' id='aboutProject'>
      <h2 className='about__title'>О проекте</h2>
      <ul className='about__description'>
        <li className='about__description_element'>
          <h3 className='about__description_title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about__description_note'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about__description_element'>
          <h3 className='about__description_title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__description_note'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about__timing'>
        <li className='about__timing_backend'>
          <p className='about__timing-week about__timing-week_active'>1 неделя</p>
          <p className='about__timing-name'>Back-end</p>
        </li>
        <li className='about__timing_frontend'>
          <p className='about__timing-week'>4 недели</p>
          <p className='about__timing-name'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
