import React, {useState, useEffect, useContext} from 'react';
import './ProfilePopup.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function ProfilePopup({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onClose();
    }

  return (
    <div>
      <div
        id="editPopup"
        className={
          isOpen ? `popup popup_opened` : `popup`
        }
      >
        <div className='popup__container'>
          <h2 className='popup__title'>Изменить профиль</h2>
          <form
            name={name}
            action='#'
            className='popup__form'
            onSubmit={handleSubmit}
          >
            <div>
              <input
                required
                placeholder='Имя'
                name='name'
                value={name || ''}
                onChange={handleNameChange}
                id='name'
                type='text'
                minLength='2'
                maxLength='40'
                className='popup__input popup__input_add_name'
              />
              <span id='name-error' className='popup__error'></span>
              <input
                required
                placeholder='Почта'
                name='email'
                value={email || ''}
                onChange={handleEmailChange}
                id='email'
                type='email'
                minLength='2'
                maxLength='200'
                className='popup__input popup__input_add_mission'
              />
              <span id='about-error' className='popup__error'></span>
            </div>
            <button type='submit' className='popup__save-btn'>
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
