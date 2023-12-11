import { configureStore } from "@reduxjs/toolkit";
import breederSlice from "../features/breeder/breederSlice";
import { apiSlice } from "../features/api/apiSlice";
import dog_searchfilterSlice from "../features/collect/dog_searchfilterSlice";
import onDogSearchSlice from "../features/collect/onDogSearchSlice";
import onUseDogfilterSlice from "../features/collect/onUseDogfilterSlice";
import onBreederSearchSlice from "../features/collect/onBreederSearchSlice";
import breeder_searchSlice from "../features/collect/breeder_searchSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    breeder: breederSlice,
    dog_searchfilter: dog_searchfilterSlice,
    onDogSearch: onDogSearchSlice,
    onUseDogfilter: onUseDogfilterSlice,
    breeder_search:breeder_searchSlice,
    onBreederSearch: onBreederSearchSlice,
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
