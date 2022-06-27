import React, { useState, useEffect, useContext } from 'react';
import './ProfilePopup.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useForm } from 'react-hook-form';

function ProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

/*   useEffect(() => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser]); */

  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.value === currentUser.name) {
      setDisable(true)
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.value === currentUser.email) {
      setDisable(true)
      console.log(e.target.value)
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      email: email,
    });
    reset();
    onClose();
  }

  return (
    <div>
      <div id='editPopup' className={isOpen ? `popup popup_opened` : `popup`}>
        <div className='popup__container'>
          <h2 className='popup__title'>Изменить профиль</h2>
          <form
            name={name}
            action='#'
            className='popup__form'
            onSubmit={handleFormSubmit}
          >
            <div>
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
                    message:
                      'Имя содержит только латиницу, кириллицу или дефис',
                  },
                })}
                placeholder='Имя'
                name='name'
                value={name || ''}
                onChange={handleNameChange}
                id='name'
                type='text'
                className='popup__input popup__input_add_name'
              />
              <span id='name-error' className='popup__error'>
                {errors?.name && errors.name.message}
              </span>
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
                placeholder='Почта'
                name='email'
                value={email || ''}
                onChange={handleEmailChange}
                id='email'
                type='email'
                className='popup__input popup__input_add_mission'
              />
              <span id='about-error' className='popup__error'>
                {errors?.email && errors.email.message}
              </span>
            </div>
            <button
              type='submit'
              className={
                !isValid || disable === true
                  ? 'popup__save-btn popup__save-btn_disabled'
                  : 'popup__save-btn'
              }
              disabled={!isValid || disable === true}
            >
              Сохранить
            </button>
          </form>
          <button
            type='button'
            className='popup__close'
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePopup;
