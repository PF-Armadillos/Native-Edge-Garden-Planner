import React from 'react';
import PlantCardSelectTester from './PlantCardSelectTester.jsx';
import plantDatabase from '../staticObject.js';
import { useState } from 'react';

export default function SelectPlants() {
	const [selectId, setSelectId] = useState([]);

	const groupByHabit = (plants) => {
		return plants.reduce((group, plant) => {
			const { Habit } = plant;
			group[Habit] = group[Habit] || [];
			group[Habit].push(plant);
			return group;
		}, {});
	};

	const plantsByHabit = groupByHabit(plantDatabase);

	// const addPlant = () => {
	// 	setSelectId(selectId.push({ plantId: count }));
	// };

	return (
		<div className='plant-columns'>
			{['Tree', 'Shrub', 'Herb'].map((habit) => (
				<div className='column' key={habit}>
					<h2>{habit}</h2>
					{plantsByHabit[habit]?.map((plant) => (
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
							// addPlant={addPlant}
						/>
					))}
				</div>
			))}
			<button className='submitOrder'>Submit Order</button>
		</div>
	);
}
