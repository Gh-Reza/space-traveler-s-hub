import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = response;
  const neededData = data.map((d) => ({
    id: d.rocket_id,
    name: d.rocket_name,
    type: d.rocket_type,
    image: d.flickr_images[0],
  }));
  return neededData;
});

const initialState = {};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        const newState = {
          ...state,
          isLoading: true,
        };
        return newState;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        const newState = {
          ...state,
          rockets: action.payload,
          isLoading: false,
        };
        return newState;
      });
  },
});

export default rocketsSlice.reducer;
