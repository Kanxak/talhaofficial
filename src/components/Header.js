import React from 'react';
// images
import Logo from  '../assets/Logo.svg';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='http://localhost:3000/static/media/Logo.23bf098723dbd86767e7d6084d88a61f.svg'>
          <img src={Logo} alt='Sumtingwrong' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
        </div>
        </div>
        </header>
        );
};

export default Header;
