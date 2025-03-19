import React from 'react';

const SearchBar = ({ search, onSearch }) => {
  return (
    <div className='flex items-center justify-center w-full'>
      <input
        className='w-full max-w-md px-4 py-2 text-white bg-transparent border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-white placeholder-gray-400'
        type='text'
        placeholder='Search Users by Name'
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;