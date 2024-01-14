import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface EmailState {
  select: string;
  inputValue: string;
}

const initialState: EmailState = {
  select: "전체",
  inputValue: "",
};

const SearchResultSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setSelect: (state, action: PayloadAction<string>) => {
      state.select = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setSelect, setInputValue } = SearchResultSlice.actions;

export const selectSearchResultSlice = (state: RootState) => state.searchResult;

export default SearchResultSlice.reducer;
