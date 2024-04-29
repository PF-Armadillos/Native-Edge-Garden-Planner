import React, { useState } from 'react';
import PlantCard from './PlantCard.jsx';

export default function SelectPlants() {
  const sampleTest = {
    _id: '662fbb7313277adf58aeef05',
    State: 'New York',
    Species: 'Acer rubrum',
    CommonName: 'Red Maple',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG2564.JPG',
  };

  const { CommonName, Habit, Duration, Thumb, _id } = sampleTest;

  return (
    <>
      <div>
        <PlantCard
          commonName={CommonName}
          habit={Habit}
          duration={Duration}
          image={Thumb}
          plantId={_id}
        />
      </div>
    </>
  );
}
