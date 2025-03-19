import React, { useState } from 'react';

const Cards = (user) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className='relative w-full sm:w-64 p-4 m-2 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer'
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div>
        <h1 className='text-xl font-bold text-white'>{user.username}</h1>
        <h3 className='text-lg text-gray-400'>{user.name}</h3>
      </div>

      {isExpanded && (
  <div
    className='absolute top-0 left-0 w-full sm:w-96 p-6 bg-gray-800 rounded-lg shadow-xl z-50'
    style={{
      transform: 'translateY(-50%)',
    }}
  >
    <button
      className='absolute top-2 right-4 text-gray-400 hover:text-white'
      onClick={() => setIsExpanded(false)}
    >
      ✕
    </button>
    <h1 className='text-2xl font-bold text-white'>{user.name}</h1>
    <h3 className='text-xl text-gray-400'>{user.username}</h3>
    <div className='mt-4 space-y-2 text-gray-300'>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {user.address}, {user.suite}, {user.city}, {user.zip}</p>
      <p><strong>Latitude:</strong> {user.lat}</p>
      <p><strong>Longitude:</strong> {user.lng}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <span>{user.phrase}, {user.bs}</span>
    </div>
  </div>
)}
    </div>
  );
};

export default Cards;