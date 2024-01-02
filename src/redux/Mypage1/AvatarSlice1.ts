import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAvatar {
  avatar: string;
  id:number;
}

const initialState: IAvatar = {
  avatar: "",
  id:0
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setAvatarId:(state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setAvatar,setAvatarId } = avatarSlice.actions;

export const selectAvatarSlice = (state: RootState) => state.avatar;

export default avatarSlice.reducer;
