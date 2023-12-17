import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IDogyFilterParams } from "../../types/dogscollect_types";
import { RootState } from "../store";



const initialState: IDogyFilterParams = {
  dogtype: 0,
  verification: false,
  isAvailable: false,
  gender: "",
  size: "",
};

export const dog_searchfilterSlice = createSlice({
  name: "dog_searchfilter",
  initialState,
  reducers: {
    set_searchfilterDogtype: (state, action: PayloadAction<number>) => {
      state.dogtype = action.payload;
    },
    set_searchfilterVerification: (state, action: PayloadAction<boolean>) => {
      state.verification = action.payload;
    },
    set_searchfilterIsAvailable: (state, action: PayloadAction<boolean>) => {
      state.isAvailable = action.payload;
    },
    set_searchfilterGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    set_searchfilterSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    setDog_searchfilter: (state, action: PayloadAction<IDogyFilterParams>) => {
      state = action.payload;
    },
  },
});

export const {
  set_searchfilterDogtype,
  set_searchfilterVerification,
  set_searchfilterIsAvailable,
  set_searchfilterGender,
  set_searchfilterSize,
  setDog_searchfilter,
} = dog_searchfilterSlice.actions;

export const selectDog_searchfilter = (state: RootState) =>
  state.dog_searchfilter;

export default dog_searchfilterSlice.reducer;
