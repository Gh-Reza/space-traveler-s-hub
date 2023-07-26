import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const neededData = data.map((d) => ({
    id: d.rocket_id,
    name: d.rocket_name,
    description: d.description,
    image: d.flickr_images[0],
    booked: false,
  }));
  return neededData;
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: false,
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateRockets: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, booked: !rocket.booked } : { ...rocket }
      )),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        const newState = {
          ...state,
          isLoading: true,
          error: false,
        };
        return newState;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        const newState = {
          ...state,
          rockets: action.payload,
          isLoading: false,
          error: false,
        };
        return newState;
      })
      .addCase(getRockets.rejected, (state, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        return newState;
      });
  },
});

export const { updateRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
