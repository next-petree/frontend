import { apiSlice } from "./ApiSlice1";
import { DOGS_URL } from "../../constants";

export const dogApiSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getDogDetail: build.query({
      query: id => ({
        url: `${DOGS_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetDogDetailQuery } = dogApiSlice;
