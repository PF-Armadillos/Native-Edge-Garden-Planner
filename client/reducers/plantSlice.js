import { createSlice } from '@reduxjs/toolkit';

export const plantSlice = createSlice({
  name: 'plants',
  initialState: {
    //decide between object, map or array
    plantList: {},
    totalPlants: 0,
    totalArea: 0,
    lastPlantId: 1,
  },
  reducers: {
    incrementPlant: (state, action) => {
      state.plantList[action.payload.id].quantity += 1;
    },
    decrementPlant: (state, action) => {
      state.plantList[action.payload.id].quantity -= 1;
    },
    selectPlant: (state, action) => {
      const id = lastPlantId + 1;
      state.plantList[id] = action.payload;
      state.lastPlantId++;
    },
    deselectPlant: (state, action) => {
      delete state.plantList[action.payload.id];
    },
  },
});

//async function if we do everything on one page
export const getPlantDataAsync = (location) => {
  return async (dispatch, getState) => {
    try {
      const foodData = await fetch(`/api/${location}`);
      //check for empty data
      if (!foodData.name) {
        throw 'Could not find plants for area. Check back later!';
      }
      dispatch(getFood(foodData));
    } catch (err) {
      console.log('Getting foodData error: ', err);
    }
  };
};

export const {
  /**actions */
  incrementPlant,
  decrementPlant,
  selectPlant,
  deselectPlant,
} = plantSlice.actions;
export default plantSlice.reducer;
