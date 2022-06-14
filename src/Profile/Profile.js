import React from 'react';
import './Profile.css';
import Header from '../components/Header/Header';
import Burger from '../components/Burger/Burger';

function Profile({ openBurgerMenu, burgerMenu, closeBurgerMenu }) {
  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
      <section className='profile'>
        <div className='profile__content'>
          <h1 className='profile__title'>Привет, Евгений!</h1>
          <div className='profile__block'>
            <p className='profile__name'>Имя</p>
            <h2 className='profile__name'>Евгений</h2>
          </div>
          <div className="profile__line"></div>
          <div className='profile__block'>
            <p className='profile__email'>Почта</p>
            <h2 className='profile__email'>effectorea@yandex.ru</h2>
          </div>
          <div className='profile__buttons'>
            <button className='profile__edit'>Редактировать</button>
            <button className='profile__exit'>Выйти из аккаунта</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
