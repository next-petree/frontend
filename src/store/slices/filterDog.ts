import { createSlice } from '@reduxjs/toolkit';
import {E_Dog_Gender, E_dog_size, E_is_available, E_is_verified} from '../../pages/dogs/constatns';
import { RootState } from '..';
import { BreedSelectType } from '~/components/common/select/MajorSelect';

interface filterDogType {
  dogId: BreedSelectType[] | undefined;
  isVerified: E_is_verified;
  isAvailable: E_is_available;
  gender: E_Dog_Gender;
  size: E_dog_size;
}


const initialState: filterDogType = {
  dogId: undefined,
  isVerified: E_is_verified.ALL,
  isAvailable: E_is_available.ALL,
  gender: E_Dog_Gender.ALL,
  size: E_dog_size.ALL,
};


export const filterDogSlice = createSlice({
  name: 'filterDog',
  initialState,
  reducers: {
    setDogId(state, {payload}) {
      console.log(payload,'-----')
      state.dogId = payload;
    },
    setIsVerified(state, {payload}) {
      state.isVerified = payload;
    },
    setIsAvailable(state, {payload}) {
      state.isAvailable = payload;
    },
    setGender(state, {payload}) {
      state.gender = payload;
    },
    setSize(state, {payload}) {
      state.size = payload;
    },
  }
});

export const filterDogState = (state: RootState) => state.filterDogSlice;
export const {setDogId, setIsAvailable, setIsVerified, setGender,setSize } = filterDogSlice.actions;
export default filterDogSlice.reducer;

