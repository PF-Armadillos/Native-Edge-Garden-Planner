import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlant, deselectPlant } from './../reducers/plantSlice.js';

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
  const select = (plantId) => dispatch(SelectPlant(plantId));
  const deselect = (plantId) => dispatch(deselectPlant(plantId));
  let checked = false;
  function handleClick(e) => {
    if(checked) {
      deselect(e.target.id);
      checked = !checked;
    } else {
      select(e.target.id);
      checked = !checked;
    }
  }

  return (
    <div className='plantBox' onClick={handleClick} id={plantId}>
      <img src={image} alt='happy little flowers' />
      <p className='species'>Latin Name: {species}</p>
      <p className='plantName'>Name: {commonName}</p>
      <p className='habit'>Plant-Type: {habit}</p>
      <p className='duration'>Duration: {duration}</p>
      <p className='light'>Light: {light}</p>
      <p className='water'>Water: {water}</p>
    </div>
  );
}
