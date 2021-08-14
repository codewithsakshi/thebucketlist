import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center lg:px-20'>
      <div className='flex items-center justify-between flex-1'>
        <Link to='/'>
          <h3 className='flex-auto text-4xl cursor-pointer'>
            B <i className='fab fa-bitbucket text-3xl text-red-700 -ml-2'></i>
            cket list
          </h3>
        </Link>
      </div>
      <nav className='flex-1'>
        <div className=''>
          <i
            className='fas fa-bars text-3xl absolute top-4 right-4 hamburger hidden'
            onClick={handleClick}
          ></i>
        </div>
        <ul className='flex items-center justify-evenly text-lg'>
          <li>
            <Link to='/about' className='hover:text-red-700 hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link className='hover:text-red-700 hover:underline'>Profile</Link>
          </li>
          <li>
            <Link
              to='/login'
              className='border-2 rounded-md px-4 py-1 border-red-700 hover:bg-red-700 hover:text-white'
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='border-2 rounded-md px-4 py-1 border-red-700 hover:bg-red-700 hover:text-white'
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
