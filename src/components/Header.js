import React from 'react';

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md py-4 px-10 w-72 inline-flex mx-auto'>
      <div className='mx-auto'>
        <img className='w-16 h-16 mx-auto mb-4' src="images/logo.png" alt="ROXX Music Logo" />
        <div className='text-center'>
          <div className='font-bold text-2xl mb-2'>ROXX Music</div>
          <div className='text-'>Your Special Music App</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
