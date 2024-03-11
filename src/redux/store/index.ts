import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from '../slice/itemSlice';

const rootReducer = combineReducers({
    counter: itemReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
