import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

interface Item {
  id: number;
  img: string;
}

const initialState: Item[] = [];

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      const existingIndex = state.findIndex(
        item => item.id === action.payload.id,
      );
      if (existingIndex !== -1) {
        Alert.alert('같은 아이템이 선택되었습니다.');
      } else {
        state.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const indexToRemove = state.findIndex(item => item.id === action.payload);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    resetItem(state) {
      return initialState;
    },
  },
});

export const { addItem, removeItem, resetItem } = itemSlice.actions;
export default itemSlice.reducer;
