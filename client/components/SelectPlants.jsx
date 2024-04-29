import React, { useState } from 'react';
import PlantCardSelect from './PlantCardSelect.jsx';
import plantDatabase from '../staticObject.js';
import { useSelector } from 'react-redux';

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


  //   "_id": "662fbb7313277adf58aeef0b",
  //   "State": "New York",
  //   "Species": "Adiantum pedatum",
  //   "CommonName": "Northern Maidenhair Fern",
  //   "Duration": "Perennial",
  //   "Habit": "Fern",
  //   "Light": "Shade, Part-shade",
  //   "Water": "Moist",
  //   "Thumb": "https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3197.JPG"
  // },
  const { CommonName, Habit, Duration, Thumb, _id } = sampleTest;
  const testarr= [    <PlantCard
    commonName={CommonName}
    habit={Habit}
    duration={Duration}
    image={Thumb}
    plantId={_id}
  />,
  <PlantCard
    commonName={"Northern Maidenhair Fern"}
    habit={Habit}
    duration={Duration}
    image={Thumb}
    plantId={_id}
  />,
  <PlantCard
      commonName={CommonName}
      habit={Habit}
      duration={Duration}
      image={Thumb}
      plantId={_id}
    />,
  <PlantCard
      commonName={CommonName}
      habit={Habit}
      duration={Duration}
      image={Thumb}
      plantId={_id}
    />]
  return (
    <>
      <div className='PlantContainer'>
        {testarr}
      </div>
    </>
  );
}
