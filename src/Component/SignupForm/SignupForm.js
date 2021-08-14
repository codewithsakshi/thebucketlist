import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

export default function SignupForm() {
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className='signup-form bg-white w-full max-w-md  mx-auto max-h-screen px-12 py-12 my-4 flex flex-col  rounded-3xl shadow-lg'>
      <h1 className='text-3xl  text-red-800 font-semibold pb-2 text-center'>
        Create account
      </h1>
      <p className='text-lg text-center'>
        Already have an account?
        <Link to='/login' className='text-red-800 underline'>
          Log in
        </Link>
      </p>
      <form onClick={handleSubmit} className='pt-12'>
        <div className='Signup-field'>
          <input
            type='text'
            onClick={handleUserName}
            required
            className='signup-input border-b-2 border-gray-300 outline-none pt-2'
          />
          <label
            htmlFor='userName'
            className='signup-label text-gray-400 text-xl'
          >
            Username
          </label>
        </div>
        <div className='Signup-field'>
          <input
            type='email'
            onClick={handleEmail}
            required
            className='signup-input border-b-2 border-gray-300 outline-none pt-2'
          />
          <label htmlFor='email' className='signup-label text-gray-400 text-xl'>
            Email
          </label>
        </div>
        <div className='Signup-field'>
          <input
            type='password'
            onClick={handlePassword}
            required
            className='signup-input border-b-2 border-gray-300 outline-none pt-2'
          />
          <label
            htmlFor='password'
            className='signup-label text-gray-400 text-xl'
          >
            Password
          </label>
        </div>
        <button
          type='submit'
          className='signup-btn bg-red-800 text-white w-full py-3 rounded-full text-xl  hover:bg-red-900'
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
