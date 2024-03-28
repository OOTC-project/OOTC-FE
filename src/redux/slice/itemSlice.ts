import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  top: null,
  outer: null,
  bottom: null,
  etc: null,
};
const itemSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTop(state, action) {
      state.top = action.payload;
    },
    setOuter(state, action) {
      state.outer = action.payload;
    },
    setBottom(state, action) {
      state.bottom = action.payload;
    },
    setEtc(state, action) {
      state.etc = action.payload;
    },
  },
});

export const { setTop, setOuter, setBottom, setEtc } = itemSlice.actions;

export default itemSlice.reducer;
