import { configureStore } from "@reduxjs/toolkit";
import breederSlice from "../redux/Breeder1/BreederSlice1";
import { apiSlice } from "./api/ApiSlice1";
import dog_searchfilterSlice from "./Collect1/DogSearchfilterSlice1";
import onDogSearchSlice from "../redux/Collect1/OnDogSearchSlice1";
import onUseDogfilterSlice from "./Collect1/OnUseDogfilterSlice1";
import onBreederSearchSlice from "../redux/Collect1/OnBreederSearchSlice1";
import breeder_searchSlice from "./Collect1/BreederSearchSlice1";
import avatarSlice from "../redux/Mypage1/AvatarSlice1";
import AddressSlice from "./Address/AddressSlice";
import CheckEmailSlice from "./Register/CheckEmailSlice";
import CheckNicknameSlice from "./Register/CheckNicknameSlice";
import CheckPhoneNumberSlice from "./Register/CheckPhoneNumberSlice";
import CheckPasswordSlice from "./Register/CheckPasswordSlice";
import CheckMainBreedSlice from "./Register/CheckMainBreedSlice";
import SearchResultSlice from "./SearchResult/SearchResultSlice";
import SuccessResultSlice from "./SuccessResult/SuccessResultSlice";
import ChangeAvatarSlice from "./Mypage1/ChangeAvatarSlice1";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    breeder: breederSlice,
    dog_searchfilter: dog_searchfilterSlice,
    onDogSearch: onDogSearchSlice,
    onUseDogfilter: onUseDogfilterSlice,
    breeder_search: breeder_searchSlice,
    onBreederSearch: onBreederSearchSlice,
    avatar: avatarSlice,
    address: AddressSlice,
    email: CheckEmailSlice,
    nickname: CheckNicknameSlice,
    phonenumber: CheckPhoneNumberSlice,
    password: CheckPasswordSlice,
    mainbreed: CheckMainBreedSlice,
    searchResult: SearchResultSlice,
    success: SuccessResultSlice,
    changeavatar: ChangeAvatarSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
