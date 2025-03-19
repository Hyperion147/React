import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='flex'>
            <ul>
                <li><a href="#PricingCard">Pricing</a></li>
                <li><a href="ContactForm">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar