import { createSlice } from '@reduxjs/toolkit';

export const plantSlice = createSlice({
  name: 'plants',
  initialState: {
    plantList: [],
    selectedPlantList: {},
    totalPlants: 0,
    totalArea: 0,
    lastPlantId: 0,
  },
  reducers: {
    incrementPlant: (state, action) => {
      state.selectedPlantList[action.payload.id].quantity += 1;
    },
    decrementPlant: (state, action) => {
      state.selectedPlantList[action.payload.id].quantity -= 1;
    },
    selectPlant: (state, action) => {
      const id = lastPlantId + 1;
      const newPlant = {
        id: action.payload.id,
        quantity: 0,
        area: action.payload.area,
      };
      state.selectedPlantList[id] = newPlant;
      state.lastPlantId++;
    },
    deselectPlant: (state, action) => {
      delete state.selectedPlantList[action.payload];
    },
    setPlantList: (state, action) => {
      state.plantList = action.payload;
    },
    setGardenArea: (state, action) => {
      state.totalArea = action.payload;
    },
  },
});

//async function if we do everything on one page
export const getPlantDataAsync = (location) => {
  return async (dispatch, getState) => {
    try {
      console.log(location);
      const plantData = await fetch(`/plant/?location=${location}`);
      console.log(plantData);
      //check for empty data
      if (!plantData.ok) {
        throw 'Could not find plants for area. Check back later!';
      }
      dispatch(setPlantList(plantData));
    } catch (err) {
      console.log('Getting plantData error: ', err);
    }
  };
};

export const {
  /**actions */
  incrementPlant,
  decrementPlant,
  selectPlant,
  deselectPlant,
  setPlantList,
  setGardenArea,
} = plantSlice.actions;
export default plantSlice.reducer;
