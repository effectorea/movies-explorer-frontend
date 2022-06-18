import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register({ onRegister }) {

  const [isRegister, setIsRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsRegister({
      ...isRegister,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(isRegister);
  };

  return (
    <div className='register'>
      <Link to='/'>
        <img className='register__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' name='registrationForm' onSubmit={handleSubmit} action="#">
        <label htmlFor='name' className='register__label'>Имя</label>
        <input
            className='register__input'
            minLength='3'
            maxLength='40'
            id='registerName'
            name='name'
            type='name'
            value={isRegister.name}
            onChange={handleChange}
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
            value={isRegister.email}
            onChange={handleChange}
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
            value={isRegister.password}
            onChange={handleChange}
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
