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
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      state.missions = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload.map((mission) => ({ ...mission, reserved: false }));
        state.isLoading = false;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = true;
      });
  },
});
export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
export { fetchMissions };
