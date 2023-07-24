import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/miissionsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
