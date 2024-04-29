import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function PlantCardSelect({
  commonName,
  habit,
  duration,
  image,
  plantId,
  species,
  light,
  water,
}) {
  //create plant Id when making all the regular plant cards
  const dispatch = useDispatch();
  const plant = useSelector((state) => state.plant);

  return (
    <div className='plantBox'>
      <img src={image} alt='happy little flowers' />
      <p className='species'>Latin Name: {species}</p>
      <p className='plantName'>Name: {commonName}</p>
      <p className='habit'>Plant-Type: {habit}</p>
      <p className='duration'>Duration: {duration}</p>
      <p className='light'>Light: {light}</p>
      <p className='water'>Water: {water}</p>
      <button className='add' onClick={handleAdd}>
        +
      </button>
      <button className='minus' onClick={handleMinus}>
        -
      </button>
    </div>
  );
}
