import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAvatar {
  avatar: string;
}

const initialState: IAvatar = {
  avatar: "",
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
  },
});

export const { setAvatar } = avatarSlice.actions;

export const selectAvatarSlice = (state: RootState) => state.avatar;

export default avatarSlice.reducer;
