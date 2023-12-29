import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NicknameState {
  nickname: string;
  nicknameCheck: boolean;
}

const initialState: NicknameState = {
  nickname: "",
  nicknameCheck: false,
};

const CheckNicknameSlice = createSlice({
  name: "nickname",
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setNicknameCheck: (state, action: PayloadAction<boolean>) => {
      state.nicknameCheck = action.payload;
    },
  },
});

export const { setNickname, setNicknameCheck } = CheckNicknameSlice.actions;

export const selectNicknameSlice = (state: RootState) => state.nickname;

export default CheckNicknameSlice.reducer;
