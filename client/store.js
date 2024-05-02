import { configureStore } from '@reduxjs/toolkit';
import {plantSlice} from './reducers/plantSlice';

export const store = configureStore({
  reducer: { plants: plantSlice.reducer },
});
