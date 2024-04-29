import React, { useState } from 'react';
import PlantCardSelect from './PlantCardSelect.jsx';
import plantDatabase from '../staticObject.js';
import { useSelector } from 'react-redux';

console.log(plantDatabase);

export default function SelectPlants() {
  //fetch all plants from database via url
  //for loop nonsense here
  const plantData = useSelector((state) => state.plants.plantList);
  console.log(plantData);
  const array = [];
  for (const ele of plantData) {
    array.push(<PlantCardSelect />);
  }
  return (
    <div className='plant-list'>
      {array}
      {/* {plantDatabase.map((plant) => {
        <PlantCardSelect
          commonName={plant.CommonName}
          species={plant.Species}
          duration={plant.Duration}
          habit={plant.Habit}
          image={plant.Thumb}
          light={plant.Light}
          water={plant.Water}
          plantId={plant._id}
          key={plant._id}
        />;
      })} */}
    </div>
  );
}
