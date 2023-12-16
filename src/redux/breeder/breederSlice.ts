import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface IBreederState {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  address1: string;
  verified: boolean;
  distance: number;
  types: string[];
  profileImagUrl?: string;
}

const initialState: IBreederState = {
  id: 0,
  email: "",
  nickname: "",
  phoneNumber: "",
  address1: "",
  verified: false,
  distance: 0,
  types: [],
  profileImagUrl: "",
};

export const breederSlice = createSlice({
  name: "breeder",
  initialState,
  reducers: {
    setProfileImg: (state, action: PayloadAction<string>) => {
      state.profileImagUrl = action.payload;
    },
  },
});

export const { setProfileImg } = breederSlice.actions;

export const selectBreederProfile = (state: RootState) =>
  state.breeder.profileImagUrl;

export default breederSlice.reducer;
