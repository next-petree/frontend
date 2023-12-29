import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DogType {
  id: number;
  name: string;
  imgUrl: string;
}

interface MainBreedState {
  searchKeyword: string;
  searchResults: DogType[];
  selectedBreeds: DogType[];
}

const initialState: MainBreedState = {
  searchKeyword: "",
  searchResults: [],
  selectedBreeds: [],
};

const MainBreedSlice = createSlice({
  name: "mainbreed",
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<DogType[]>) => {
      state.searchResults = action.payload;
    },
    setSelectedBreeds: (state, action: PayloadAction<DogType[]>) => {
      state.selectedBreeds = action.payload;
    },
  },
});

export const { setSearchKeyword, setSearchResults, setSelectedBreeds } =
  MainBreedSlice.actions;

export const selectMainBreedSlice = (state: RootState) => state.mainbreed;

export default MainBreedSlice.reducer;
