import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGardenArea, getPlantDataAsync } from './../reducers/plantSlice';

const CreateGarden = () => {
  const [location, setLocation] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //if location has space change it to another character for url encoding
      if (location.includes(' ')) {
        const replaced = location.replace(/ /g, '+');
        dispatch(getPlantDataAsync(replaced));
      } else dispatch(getPlantDataAsync(location));
      const area = length * width;
      console.log(area);
      dispatch(setGardenArea(area));
      navigate('/SelectPlantsTester3');
    } catch (error) {
      // Log any errors that occur during the try block
      console.error('Error fetching plant data:', error);
    }
  };

  return (
    <div id='create-con' className='container'>
      <div id='welcome-header'>
        <h1>Welcome to ShellScape Garden Planner</h1>
        <h2>Complete the form below to get started!</h2>
      </div>
      <form id='welcome-form'>
        <label>Location</label>
        <input
          type='text'
          id='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <label>Length of garden bed (inches)</label>
        <input
          type='text'
          id='length'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Width of garden bed (inches)</label>
        <input
          type='text'
          id='width'
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        ></input>
        <button onClick={handleSubmit} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateGarden;
