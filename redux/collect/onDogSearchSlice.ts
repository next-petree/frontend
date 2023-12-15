import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IOnDogSearch {
    onDogSearch:boolean;
}

const initialState:IOnDogSearch = {
  onDogSearch: false
};

export const onDogSearchSlice = createSlice({
  name: "onDogSearch",
  initialState,
  reducers: {
    setOnDogSearch: (state, action: PayloadAction<boolean>) => {
      state.onDogSearch = action.payload;
    },
  },
});

export const {
    setOnDogSearch
} = onDogSearchSlice.actions;

export const selectOnDogSearchSlice = (state: RootState) =>
  state.onDogSearch;

export default onDogSearchSlice.reducer;
