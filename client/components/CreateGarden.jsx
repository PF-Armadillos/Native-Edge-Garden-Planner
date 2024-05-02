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
	// const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      navigate('/selectplantstester3');
    } catch (error) {
      // Log any errors that occur during the try block
      console.error('Error fetching plant data:', error);
    }
  };

	return (
		<div id='create-con' className='container'>
			<div id='welcome-header'>
				<h1>Welcome to ShellScape Garden Planner</h1>
				<h2 data-testid='header2'>Complete the form below to get started!</h2>
			</div>
			<form id='welcome-form'>
				<label for='location'>Location</label>
				<input
					type='text'
					id='location'
					value={location}
					onChange={(e) => setLocation(e.target.value)}></input>
				<label for='length'>Length of garden bed (inches)</label>
				<input
					type='text'
					id='length'
					value={length}
					onChange={(e) => setLength(e.target.value)}></input>
				<label for='width'>Width of garden bed (inches)</label>
				<input
					type='text'
					id='width'
					value={width}
					onChange={(e) => setWidth(e.target.value)}></input>
				<button onClick={handleSubmit} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateGarden;
