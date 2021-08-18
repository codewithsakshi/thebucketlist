import React, { useState, useContext } from 'react';
import FirebaseContext from '../../firebase/FirebaseContext';
import './LoginForm.css';

export default function LoginForm() {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='login-form flex flex-col  items-center max-w-md max-h-screen mt-20 m-auto py-4 px-16 rounded-2xl shadow-xl bg-white mb-4'
    >
      <h3 className='text-3xl text-center text-red-700 pt-4 font-semibold '>
        Login
      </h3>
      <div className='login-field mt-8 mb-12'>
        <input
          type='email'
          onChange={handleEmail}
          placeholder='email'
          className='login-input border-red-800 w-full  border-b-2 outline-none text-xl rounded-sm bg-transparent'
        />
      </div>
      <div className='login-field mb-6'>
        <input
          type='password'
          placeholder='password'
          onChange={handlePassword}
          className='login-input w-full mb-3 border-b-2 border-red-800 outline-none text-xl bg-transparent'
        />
      </div>
      <button
        type='submit'
        className='login-btn w-1/4 px-16 mb-4 flex items-center justify-center py-1 border-2 rounded-full text-white text-xl bg-red-700  hover:bg-red-800'
      >
        Login
      </button>

      <button
        onClick={() => firebase.doGoogleSignIn()}
        className='mt-4 login-btn px-16 mb-4 flex items-center justify-center py-1 border-2 rounded-md text-xl  border-red-800 hover:bg-red-800 hover:text-white'
      >
        Login with Google
      </button>
    </form>
  );
}
