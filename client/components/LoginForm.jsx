import React, { useState } from 'react';
import TextInput from './TextInput.jsx';
import InputError from './InputError.jsx';
import InputLabel from './InputLabel.jsx';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    //sanitize data?
    try {
      e.preventDefault();
      e.target.disabled = true;
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!res) throw console.log('Something went wrong!');
      console.log(res);
      //reset form
      setUsername('');
      setPassword('');
      e.target.disabled = false;
      if (res) {
        navigate('/CreateGarden');
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  function handleClick2(e) {
    e.preventDefault();
    e.target.disabled = true;
    navigate('/SignUp');
    e.target.disabled = false;
  }
  return (
    <div id='loginform-con' className='container'>
      <h1>Let's Grow Together</h1>
      <form className='login-form' onSubmit={submit}>
        <InputLabel for='username' value='User Name: ' />
        <TextInput
          id='username'
          className='text-input'
          value={username}
          handleChange={(e) => setUsername(e.target.value)}
          required
          isFocused
        />
        <InputError for='username' value='username' />

        <InputLabel for='password' value='Password: ' />
        <TextInput
          id='password'
          type='password'
          className='text-input'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
          isFocused
        />
        <InputError for='password' value='password' />
      </form>
      <button onClick={submit} type='submit'>
        Login
      </button>
      <button
        onClick={handleClick2}
        type='submit'
        className='button2'
        id='button2'
      >
        Sign Up
      </button>
    </div>
  );
}
