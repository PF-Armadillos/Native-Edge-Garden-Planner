import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

export default function LoginForm({ setIsAuthenticated, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    //sanitize data?
    try {
      e.preventDefault();
      e.target.disabled = true;
      setError('');

      const res = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
        //credentials: 'include' // use if end up using cookie
      });
      const data = await res.json();

      if (res.ok && data) {
        setIsAuthenticated(true);
        setUser(username); //global user state
        navigate('/creategarden');
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setError(data.message || 'Sign up failed');
      }
      if (!res) throw console.log('Something went wrong!');
      console.log(res);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      //reset form
      setUsername('');
      setPassword('');
      e.target.disabled = false;
    }
  };

  return (
    <div id='signupform' className='container'>
      <h1>Sign up</h1>
      <form className='login-form' onSubmit={submit}>
        {error && <div className='error-message'>{error}</div>}
        <label for='username'>User Name: </label>
        <div className='flex flex-col items-start'>
          <input
            type='username'
            name=''
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <label for='password'> Password: </label>
        <div>
          <input
            type='password'
            name=''
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Create User</button>
      </form>
    </div>
  );
}
