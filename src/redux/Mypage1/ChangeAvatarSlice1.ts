import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IChangeAvatar {
  changeavatar: boolean;
}

const initialState: IChangeAvatar = {
  changeavatar: false,
};

export const ChangeAvatarSlice = createSlice({
  name: "changeavatar",
  initialState,
  reducers: {
    setChangeavatar: (state, action: PayloadAction<boolean>) => {
      state.changeavatar = action.payload;
    },
  },
});

export const { setChangeavatar } = ChangeAvatarSlice.actions;

export const selectChangeAvatarSlice = (state: RootState) => state.changeavatar;

export default ChangeAvatarSlice.reducer;
