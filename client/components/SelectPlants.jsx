import React, { useState } from 'react';
import PlantCardSelect from './PlantCardSelect.jsx';
import staticObject from '../staticObject.js';

export default function SelectPlants() {
  //fetch all plants from database via url
  return (
    <div className='plant-list'>
      {staticObject.map((plant) => {
        commonName={plant.CommonName}
        species={plant.Species}
        duration={plant.Duration}
        habit={plant.Habit}
        image={plant.Thumb}
        light={plant.Light}
        water={plant.Water}
        plantId={plant._id}
        key={plant._id}
      })}
    </div>
  );
}
