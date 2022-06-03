import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className='register'>
      <Link to='/'>
        <img className='register__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' name='registrationForm' action='#'>
        <label htmlFor='name' className='register__label'>Имя</label>
        <input
            className='register__input'
            minLength='3'
            maxLength='40'
            id='registerName'
            name='name'
            type='name'
            required
          />
        <label htmlFor='email' className='register__label'>E-mail</label>
        <input
            className='register__input'
            minLength='3'
            maxLength='40'
            id='registerEmail'
            name='email'
            type='email'
            required
          />
        <label htmlFor='password' className='register__label'>Пароль</label>
        <input
            className='register__input'
            minLength='3'
            maxLength='15'
            id='registerPassword'
            name='password'
            type='password'
            required
          />
        <button className='register__button'>Зарегистрироваться</button>
      </form>
      <div className='register__link-block'>
        <div className='register__link_question'>Уже зарегистрированы?</div>
        <Link to='/sign-in' className='register__link_enter'>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
