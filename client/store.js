import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './reducers/plantSlice';

export const store = configureStore({
  reducer: { plants: plantsReducer },
});
