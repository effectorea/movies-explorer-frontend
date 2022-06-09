import React from 'react';
import './AccBtn.css';
import { Link } from 'react-router-dom';

function AccBtn() {
  return (
    <Link className='navigation__account' to='/saved-movies'>
      Аккаунт
    </Link>
  );
}

export default AccBtn;
