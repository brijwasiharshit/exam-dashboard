import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';

const Left = () => {
  return (
    <div className='bg-teal-50 min-h-screen inline-block p-6'>
        <Header />
        <SearchBox />
    </div>
  );
}

export default Left;
