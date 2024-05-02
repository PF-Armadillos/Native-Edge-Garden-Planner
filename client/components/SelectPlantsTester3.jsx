import React, { lazy, Suspense, useState } from 'react';
import plantDatabase from '../staticObject.js';
import PlantCardSelectTester from './PlantCardSelectTester.jsx';
import { Audio, FidgetSpinner } from 'react-loader-spinner';


export default function SelectPlants() {
	// setting delay to show how the lazyLoading works.
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	const LazyPlantCardSelect = lazy(async () => {
		await delay(500); // delay 2sec
		return import('./PlantCardSelectTester.jsx');
	});

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


	return (
		
			<Suspense fallback={<div className="loading-overlay">
    <div className="loading-spinner"><Audio
        height="80"
        width="80"
        radius="9"
        color="hsl(143, 49%, 43%)"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      /></div></div>}>

			<div className='plant-columns'>
				{['Tree', 'Shrub', 'Herb'].map((habit) => (
					<div className='column' key={habit}>
						<h2>{habit}</h2>
						{plantsByHabit[habit]?.map((plant) => (
							<LazyPlantCardSelect
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
						))}
					</div>
				))}
			</div>
		</Suspense>
	);
}