import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState({
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
    onLogin(isRegister);
  };
    return (
      <div className='register' id="login">
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='register__title'>Рады видеть!</h2>
        <form className='register__form' name='registrationForm' action='#' onSubmit={handleSubmit}>
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
          <button className='register__button'>Войти</button>
        </form>
        <div className='register__link-block'>
          <div className='register__link_question'>Еще&#160;не&#160;зарегистрированы?</div>
          <Link to='/sign-up' className='register__link_enter'>
            Регистрация
          </Link>
        </div>
      </div>
    );
  }
  
  export default Login;