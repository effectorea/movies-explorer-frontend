import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';

function Register({ onRegister }) {
  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const [isRegister, setIsRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsRegister({
      ...isRegister,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onRegister(isRegister);
    reset();
  };

  return (
    <div className='register'>
      <Link to='/'>
        <img className='register__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form
        className='register__form'
        name='registrationForm'
        onSubmit={handleFormSubmit}
        action='#'
        noValidate
      >
        <label htmlFor='name' className='register__label'>
          Имя
        </label>
        <input
          {...register('name', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 3,
              message: 'Количество символов не менее 3',
            },
            maxLength: {
              value: 20,
              message: 'Количество символов не более 20',
            },
            pattern: {
              value: /^[а-яА-ЯёЁa-zA-Z0-9-]+$/,
              message: 'Имя содержит только латиницу, кириллицу или дефис',
            },
          })}
          className='register__input'
          id='registerName'
          name='name'
          type='name'
          value={isRegister.name}
          onChange={handleChange}
        />
        <span className='register__error'>
          {errors?.name && errors.name.message}
        </span>
        <label htmlFor='email' className='register__label'>
          E-mail
        </label>
        <input
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 3,
              message: 'Количество символов не менее 3',
            },
            maxLength: {
              value: 20,
              message: 'Количество символов не более 20',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:
                "Почта должна содержать специальные символы такие как '@' и точку",
            },
          })}
          className='register__input'
          id='registerEmail'
          name='email'
          type='email'
          value={isRegister.email}
          onChange={handleChange}
        />
        <span className='register__error'>
          {errors?.email && errors.email.message}
        </span>
        <label htmlFor='password' className='register__label'>
          Пароль
        </label>
        <input
          {...register('password', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Количество символов не менее 8',
            },
            maxLength: {
              value: 30,
              message: 'Количество символов не более 30',
            },
            pattern: {
              value: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message:
                'Пароль может состоять из латинских букв верхнего и нижнего регистра, цифр и специальных символов',
            },
          })}
          className='register__input'
          id='registerPassword'
          name='password'
          type='password'
          value={isRegister.password}
          onChange={handleChange}
        />
        <span className='register__error'>
          {errors?.password && errors.password.message}
        </span>
        <button
          className={
            !isValid
              ? 'register__button register__button_disabled'
              : 'register__button'
          }
          type='submit'
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
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
