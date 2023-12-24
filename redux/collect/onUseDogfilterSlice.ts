import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IOnUseDogfilter {
    onUseDogfilter:boolean;
}

const initialState:IOnUseDogfilter = {
    onUseDogfilter: false
};

export const onUseDogfilterSlice = createSlice({
  name: "onUseDogfilter",
  initialState,
  reducers: {
    setOnUseDogfilter: (state, action: PayloadAction<boolean>) => {
      state.onUseDogfilter = action.payload;
    },
  },
});

export const {
    setOnUseDogfilter
} = onUseDogfilterSlice.actions;

export const selectOnUseDogfilterSlice = (state: RootState) =>
  state.onUseDogfilter;

export default onUseDogfilterSlice.reducer;
