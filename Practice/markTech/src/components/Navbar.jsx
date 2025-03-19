import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='flex justify-around mx-auto py-8 px-6 md:px-20 text-white'>
            <h1 className=''><a href="">LANDING PAGE</a></h1>
            <ul className='flex gap-10'>
                <li className='border-2 px-4 rounded-xl'><a href="#PricingCard" className='hover:text-gray-400'>Pricing</a></li>
                <li className='border-2 px-4 rounded-xl'><a href="#ContactForm" className='hover:text-gray-400'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar