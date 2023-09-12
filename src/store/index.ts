/**
 * @author 임유정
 */

import { configureStore } from '@reduxjs/toolkit';
import filterDogSlice from './slices/filterDog';

const store = configureStore({
  reducer: {
    filterDogSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;