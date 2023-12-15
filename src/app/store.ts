import { configureStore } from "@reduxjs/toolkit";
import breederSlice from "../../redux/breeder/breederSlice";
import { apiSlice } from "../../redux/api/apiSlice";
import dog_searchfilterSlice from "../../redux/collect/dog_searchfilterSlice";
import onDogSearchSlice from "../../redux/collect/onDogSearchSlice";
import onUseDogfilterSlice from "../../redux/collect/onUseDogfilterSlice";
import onBreederSearchSlice from "../../redux/collect/onBreederSearchSlice";
import breeder_searchSlice from "../../redux/collect/breeder_searchSlice";
import avatarSlice from "../../redux/mypage/avatarSlice";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
