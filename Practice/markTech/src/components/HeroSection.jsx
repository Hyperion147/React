import React from 'react';
import Navbar from './Navbar';
import FinalCard from './FinalCard';

const HeroSection = () => {
  return (
    <div
      className='min-h-screen'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='min-h-screen bg-black/50'>
        <Navbar />

        <div className='pt-24'> 
          <FinalCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;