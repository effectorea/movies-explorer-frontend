import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';

function Login({ onLogin }) {
  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const [isRegister, setIsRegister] = useState({
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
    onLogin(isRegister);
    reset();
  };

  /* const onErrors = (errors) => {
    console.log(errors);
  };
 */
  return (
    <div className='register' id='login'>
      <Link to='/'>
        <img className='register__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='register__title'>Рады видеть!</h2>
      <form
        className='register__form'
        name='registrationForm'
        action='#'
        noValidate
        onSubmit={handleFormSubmit}
      >
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
          autoComplete='off'
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
          autoComplete='off'
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
          Войти
        </button>
      </form>
      <div className='register__link-block'>
        <div className='register__link_question'>
          Еще&#160;не&#160;зарегистрированы?
        </div>
        <Link to='/sign-up' className='register__link_enter'>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
