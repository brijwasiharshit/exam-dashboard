import React from 'react';

const SearchBox = () => {
  return (
    <div className='flex items-center justify-center mt-8'>
      <span className='text-xl text-gray-500 mr-3 bg-gray-600 text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</span>
      
      <input
        className='w-72 rounded-lg p-2 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline transition-shadow duration-300'
        placeholder='Enter name, singer, lyrics etc...'
      />
    </div>
  );
}

export default SearchBox;
