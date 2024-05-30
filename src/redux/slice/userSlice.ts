import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
};
const userSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
