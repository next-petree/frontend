import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface EmailState {
  email: string;
  emailCheck: boolean;
}

const initialState: EmailState = {
  email: "",
  emailCheck: false,
};

const CheckEmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmailCheck: (state, action: PayloadAction<boolean>) => {
      state.emailCheck = action.payload;
    },
  },
});

export const { setEmail, setEmailCheck } = CheckEmailSlice.actions;

export const selectEmailSlice = (state: RootState) => state.email;

export default CheckEmailSlice.reducer;
