import React from 'react';
import PropTypes from 'prop-types';

function PlantCardSelectTester({
  commonName,
  species,
  duration,
  habit,
  image,
  light,
  water,
  plantId,
}) {
  return (
    <div className='plant-card'>
      <img src={image} alt={`${commonName}`} className='plant-image-small' />
      <div className='plant-details'>
        <h3>{commonName}</h3>
        <p>
          <strong>Species:</strong> {species}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Habit:</strong> {habit}
        </p>
        <p>
          <strong>Light Needs:</strong> {light}
        </p>
        <p>
          <strong>Water Needs:</strong> {water}
        </p>
        <div>
          <button className='add'>+</button>
          <button className='minus'>-</button>
        </div>
      </div>
    </div>
  );
}

PlantCardSelectTester.propTypes = {
  commonName: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  habit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired,
  plantId: PropTypes.string.isRequired,
};

export default PlantCardSelectTester;
