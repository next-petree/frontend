import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},

  // middleware:  (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: process.env.NODE_ENV !== "development" ? false : true,
});

export default store;
