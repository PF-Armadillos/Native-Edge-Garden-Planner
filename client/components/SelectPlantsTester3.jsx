import React, { useState } from 'react';
import PlantCardSelectTester from './PlantCardSelectTester.jsx';
import plantDatabase from '../staticObject.js';
import { useSelector } from 'react-redux';

console.log(plantDatabase);

export default function SelectPlants() {
  return (
    <div className="plant-list">
      {plantDatabase.map((plant) => {
        return (
          <PlantCardSelectTester
            commonName={plant.CommonName}
            species={plant.Species}
            duration={plant.Duration}
            habit={plant.Habit}
            image={plant.Thumb}
            light={plant.Light}
            water={plant.Water}
            plantId={plant._id}
            key={plant._id}
          />
        );
      })}
    </div>
  );
}
