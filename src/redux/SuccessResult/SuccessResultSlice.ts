import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SuccessState {
  apiCallCount: number;
}

const initialState: SuccessState = {
  apiCallCount: 0,
};

const SuccessResultSlice = createSlice({
  name: "success",
  initialState,
  reducers: {
    incrementApiCallCount: state => {
      state.apiCallCount += 1;
    },
    resetApiCallCount: state => {
      state.apiCallCount = 0;
    },
  },
});

export const { incrementApiCallCount, resetApiCallCount } =
  SuccessResultSlice.actions;

export const selectSuccessResultSlice = (state: RootState) => state.success;

export default SuccessResultSlice.reducer;
