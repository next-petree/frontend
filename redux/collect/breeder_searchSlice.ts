import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../src/app/store";
import { IBreederSearch } from "../../src/types/breederscollect_type";

const initialState: IBreederSearch = {
  keyword: "",
  auth: false,
};

export const breeder_searchSlice = createSlice({
  name: "breeder_search",
  initialState,
  reducers: {
    set_breedersearchkeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    set_breedersearchauth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
});

export const { set_breedersearchkeyword, set_breedersearchauth } =
  breeder_searchSlice.actions;

export const selectBreeder_search = (state: RootState) => state.breeder_search;

export default breeder_searchSlice.reducer;
