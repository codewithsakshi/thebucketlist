import React from 'react';
import './Footer.css';

const GITHUB_URL = 'https://github.com/codewithsakshi';
const TWITTER_URL = 'https://twitter.com/sakshimittal01';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sakshimittal01/';
const INSTAGRAM_URL = 'https://www.instagram.com/_sakshi_mittal__/';

export default function Footer() {
  return (
    <div className='bg-gray-700 text-white text-center p-8'>
      <h3 className='text-4xl italic pb-8'>Contact</h3>
      <div className='flex justify-evenly items-center text-3xl w-3/4 mx-auto'>
        <div className='line lg:w-64 md:w-40  sm:w-24 bg-white'></div>
        <a href={GITHUB_URL} target='_blank' rel='noreferrer'>
          <i className='fab fa-github hover:text-gray-300'></i>
        </a>
        <a href={TWITTER_URL} target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter hover:text-gray-300'></i>
        </a>
        <a href={LINKEDIN_URL} target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin-in hover:text-gray-300'></i>
        </a>
        <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer'>
          <i className='fab fa-instagram hover:text-gray-300'></i>
        </a>
        <div className='line lg:w-64 md:w-40 sm:w-24  bg-white'></div>
      </div>
    </div>
  );
}
