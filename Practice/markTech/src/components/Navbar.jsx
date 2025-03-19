import React from 'react';

const Navbar = () => {
  // Function to handle smooth scrolling
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className='absolute top-0 left-0 w-full z-10'>
      <div className='max-w-7xl mx-auto py-8 px-6 md:px-20 flex justify-between items-center'>
        <h1 className='text-white text-xl font-bold'>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll('home');
            }}
          >
            LANDING PAGE
          </a>
        </h1>
        <ul className='flex gap-6'>
          <li className='border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300'>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('pricing');
              }}
              className='text-white hover:text-inherit'
            >
              Pricing
            </a>
          </li>
          <li className='border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300'>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('contact');
              }}
              className='text-white hover:text-inherit'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;