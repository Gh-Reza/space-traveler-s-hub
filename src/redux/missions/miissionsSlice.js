import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const fetchMissions = createAsyncThunk('missions//fetch', async () => {
  try {
    const response = await axios.get(
      url,
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
});

const initialState = {
  missions: [],
  error: undefined,
  isLoading: false,
};
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = true;
      });
  },
});

export default missionsSlice.reducer;
export { fetchMissions };
