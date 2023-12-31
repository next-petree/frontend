import { BREEDERS_URL } from "../../constants";
import { apiSlice } from "./ApiSlice1";

export const breedersApiSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getBreeders: build.query({
      query: () => ({
        url: BREEDERS_URL,
      }),
    }),
    getBreederDetail: build.query({
      query: id => ({
        url: `${BREEDERS_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetBreedersQuery, useGetBreederDetailQuery } =
  breedersApiSlice;
