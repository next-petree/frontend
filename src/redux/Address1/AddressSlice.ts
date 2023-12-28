import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAdress {
  zipCode: string;
  roadAddress: string;
  detailAddress: string;
}

const initialState: IAdress = {
  zipCode: "",
  roadAddress: "",
  detailAddress: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload;
    },
    setRoadAddress: (state, action: PayloadAction<string>) => {
      state.roadAddress = action.payload;
    },
    setDetailAddress: (state, action: PayloadAction<string>) => {
      state.detailAddress = action.payload;
    },
  },
});

export const { setZipCode, setRoadAddress, setDetailAddress } =
  addressSlice.actions;

export const selectAddressSlice = (state: RootState) => state;
export default addressSlice.reducer;
