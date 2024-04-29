import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreateGarden = () => {
  const [location, setLocation] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Location:', location);
    console.log('Length:', length);
    console.log('Width:', width);
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate('/SelectPlants');
  }

  return (
    <div id="create-con" className="container">
      <div id="welcome-header">
        <h1>Welcome to ShellScape Garden Planner</h1>
        <h2>Complete the form below to get started!</h2>
      </div>
      <form id="welcome-form" onSubmit={handleSubmit}>
        <label>Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <label>Length of garden bed (inches)</label>
        <input
          type="text"
          id="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Width of garden bed (inches)</label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        ></input>
        <button onClick={handleClick} type="submit">
          {' '}
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateGarden;
