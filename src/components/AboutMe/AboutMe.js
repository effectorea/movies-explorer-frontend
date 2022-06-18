import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo_2022-06-05_18-51-32.jpg';

function AboutMe() {
  return (
    <section className='student' id='aboutMe'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__cover'>
        <div className='student__wrapper'>
          <h3 className='student__name'>Евгений</h3>
          <p className='student__profession'>Frontend-developer, 36 лет</p>
          <p className='student__description'>
            Я родился в Москве. Летом 2021 года решил кардинально поменять свою жизнь и закончить курс 
            Яндекс.Практикума по специальности Веб-разработчик. Я пока холост, но с чем черт не шутит)) 
            Люблю слушать музыку во время тихой прогулки по парку/лесу, увлекаюсь спортом, а за время 
            этого увлечения похудел на 48 кг.
          </p>
          <ul className='student__links'>
            <li>
              <a className='student__links-item' href='https://www.facebook.com/profile.php?id=100064595025143'>
                Facebook
              </a>
            </li>
            <li>
              <a className='student__links-item' href='https://github.com/effectorea'>
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='student__photo' src={photo} alt='Фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
