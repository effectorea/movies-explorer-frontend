import React, {useState, useEffect, useContext, useCallback} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ openBurgerMenu, burgerMenu, closeBurgerMenu, openEditPopup, onSignOut, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleValuesChange = useCallback(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser])

  useEffect(() => {
    handleValuesChange();
  }, [handleValuesChange]);

  return (
    <>
      <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn} />
      <Burger isOpen={burgerMenu} onClose={closeBurgerMenu} />
      <section className='profile'>
        <div className='profile__content'>
          <h1 className='profile__title'>Привет, {currentUser && currentUser.name}!</h1>
          <div className='profile__block'>
            <p className='profile__name'>Имя</p>
            <h2 className='profile__name'>{values.name}</h2>
          </div>
          <div className="profile__line"></div>
          <div className='profile__block'>
            <p className='profile__email'>Почта</p>
            <h2 className='profile__email'>{values.email}</h2>
          </div>
          <div className='profile__buttons'>
            <button onClick={openEditPopup} className='profile__edit'>Редактировать</button>
            <button onClick={onSignOut} className='profile__exit'>Выйти из аккаунта</button>
          </div>
        </div>
      </section>

    </>
  );
}

export default Profile;
