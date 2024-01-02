import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AddressState {
  roadAddress: string;
  detailAddress: string;
}

const initialState: AddressState = {
  roadAddress: "",
  detailAddress: "",
};

const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setRoadAddress: (state, action: PayloadAction<string>) => {
      state.roadAddress = action.payload;
    },
    setDetailAddress: (state, action: PayloadAction<string>) => {
      state.detailAddress = action.payload;
    },
  },
});

export const { setRoadAddress, setDetailAddress } = AddressSlice.actions;

export const selectAddressSlice = (state: RootState) => state.address;

export default AddressSlice.reducer;
