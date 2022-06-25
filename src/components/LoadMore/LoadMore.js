import React from 'react';
import './LoadMore.css';

function LoadMore({ onLoadMore }) {
  return (
    <section className='load-more'>
      <button className='load-more__button' type='button' onClick={onLoadMore}>
        Ещё
      </button>
    </section>
  );
}

export default LoadMore;
