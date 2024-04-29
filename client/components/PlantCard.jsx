import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function PlantCard({
  commonName,
  habit,
  duration,
  image,
  plantId,
}) {
  //create plant Id when making all the regular plant cards
  const dispatch = useDispatch();
  const plant = useSelector((state) => state.plant);
  const incrementPlant = (plantId) => dispatch(incrementPlant(plantId));
  const decrementPlant = (plantId) => dispatch(decrementPlant(plantId));

  function handleAdd(e) {
    e.preventDefault();
    incrementPlant();
  }

  function handleMinus(e) {
    e.preventDefault();
    decrementPlant();
  }

  return (
    <div className='plantBox'>
      <img src={image} alt='happy little flowers' />
      <p className='plantName'>Name: {commonName}</p>
      <p className='habit'>Plant-Type: {habit}</p>
      <p className='duration'>Duration: {duration}</p>
      <button className='add' onClick={handleAdd}>
        +
      </button>
      <button className='minus' onClick={handleMinus}>
        -
      </button>
    </div>
  );
}
