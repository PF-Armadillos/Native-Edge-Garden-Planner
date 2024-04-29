import React, { useState } from 'react';
import TextInput from './TextInput.jsx';
import InputError from './InputError.jsx';
import InputLabel from './InputLabel.jsx';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    //sanitize data?
    try {
      e.preventDefault();
      const res = await fetch('/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!response) throw console.log('Something went wrong!');
      console.log(response);
      //reset form
      setUsername('');
      setPassword('');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <div>
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
          id='username'
          className='text-input'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
          isFocused
        />
        <InputError for='password' value='password' />
      </form>
      <button type='submit'>Login</button>
    </div>
  );
}
