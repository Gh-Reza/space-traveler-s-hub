import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsslice';

const store = configureStore({
  reducer: {
    rocketReducer,
  },
}, applyMiddleware);

export default store;
