import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from '../slice/itemSlice';
import userReducer from '../slice/userSlice';

const rootReducer = combineReducers({
  counter: itemReducer,
  token: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
