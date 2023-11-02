import { apiSlice } from "./apiSlice";
import { DOGS_URL } from "../../constants";

export const dogApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getDogDetail: build.query({
      query: (id) => ({
        url: `${DOGS_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetDogDetailQuery } = dogApiSlice;
