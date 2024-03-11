import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    top: null,
    outer: null,
    bottom: null,
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
    },
});

export const { setTop, setOuter, setBottom } = itemSlice.actions;

export default itemSlice.reducer;
