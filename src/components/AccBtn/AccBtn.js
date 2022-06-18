import React from 'react';
import './AccBtn.css';
import { Link } from 'react-router-dom';

function AccBtn({onClose}) {
  return (
    <Link className='navigation__account' onClick={onClose} to='/profile'>
      Аккаунт
    </Link>
  );
}

export default AccBtn;
