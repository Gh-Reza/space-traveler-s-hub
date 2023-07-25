import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsslice';
import missionsReducer from './missions/miissionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
}, applyMiddleware);

export default store;
