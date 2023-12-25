import { configureStore } from "@reduxjs/toolkit";
import breederSlice from "../redux/Breeder1/BreederSlice1";
import { apiSlice } from "../redux/api/ApiSlice1";
import dog_searchfilterSlice from "../redux/Collect1/DogSearchfilterSlice1";
import onDogSearchSlice from "../redux/Collect1/OnDogSearchSlice1";
import onUseDogfilterSlice from "../redux/Collect1/OnUseDogfilterSlice1";
import onBreederSearchSlice from "../redux/Collect1/OnBreederSearchSlice1";
import breeder_searchSlice from "../redux/Collect1/BreederSearchSlice1";
import avatarSlice from "../redux/Mypage1/AvatarSlice1";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    breeder: breederSlice,
    dog_searchfilter: dog_searchfilterSlice,
    onDogSearch: onDogSearchSlice,
    onUseDogfilter: onUseDogfilterSlice,
    breeder_search: breeder_searchSlice,
    onBreederSearch: onBreederSearchSlice,
    avatar: avatarSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
