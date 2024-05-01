import React, { useState } from 'react';
import TextInput from './unUsedComponents/TextInput.jsx';
import InputError from './unUsedComponents/InputError.jsx';
import InputLabel from './unUsedComponents/InputLabel.jsx';
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
        <label for = 'username'>User Name: </label>      
        <div className='flex flex-col items-start'>
          <input
            type='username'
            name=''
            id='username'
            value= {username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <label for='password'> Password: </label>
        <div>
          <input
            type='password'
            name=''
            id='password'
            value= {password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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

