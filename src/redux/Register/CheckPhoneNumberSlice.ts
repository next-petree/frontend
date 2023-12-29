import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PhoneNumberState {
  phoneNumber: string;
  verificationCode: string;
  phoneNumberCheck: boolean;
}

const initialState: PhoneNumberState = {
  phoneNumber: "",
  verificationCode: "",
  phoneNumberCheck: false,
};

const CheckPhoneNumberSlice = createSlice({
  name: "phonenumber",
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setVerificationCode: (state, action: PayloadAction<string>) => {
      state.verificationCode = action.payload;
    },
    setPhoneNumberCheck: (state, action: PayloadAction<boolean>) => {
      state.phoneNumberCheck = action.payload;
    },
  },
});

export const { setPhoneNumber, setVerificationCode, setPhoneNumberCheck } =
  CheckPhoneNumberSlice.actions;

export const selectPhoneNumberSlice = (state: RootState) => state.phonenumber;

export default CheckPhoneNumberSlice.reducer;
