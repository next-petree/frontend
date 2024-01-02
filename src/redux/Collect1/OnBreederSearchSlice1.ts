import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface IOnBreederSearch {
    onBreederSearch:boolean;
}

const initialState:IOnBreederSearch = {
  onBreederSearch: false
};

export const onBreederSearchSlice = createSlice({
  name: "onBreederSearch",
  initialState,
  reducers: {
    setOnBreederSearch: (state, action: PayloadAction<boolean>) => {
      state.onBreederSearch = action.payload;
    },
  },
});

export const {
    setOnBreederSearch
} = onBreederSearchSlice.actions;

export const selectOnBreederSearchSlice = (state: RootState) =>
  state.onBreederSearch;

export default onBreederSearchSlice.reducer;
