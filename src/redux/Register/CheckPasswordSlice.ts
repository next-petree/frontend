import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PasswordState {
  password: string;
  checkPassword: string;
  passwordError: string;
}

const initialState: PasswordState = {
  password: "",
  checkPassword: "",
  passwordError: "",
};

const CheckPasswordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setCheckPassword: (state, action: PayloadAction<string>) => {
      state.checkPassword = action.payload;
    },
    setPasswordError: (state, action: PayloadAction<string>) => {
      state.passwordError = action.payload;
    },
  },
});

export const { setPassword, setCheckPassword, setPasswordError } =
  CheckPasswordSlice.actions;

export const selectPasswordSlice = (state: RootState) => state.password;

export default CheckPasswordSlice.reducer;
