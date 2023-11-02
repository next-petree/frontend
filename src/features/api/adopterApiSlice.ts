import { apiSlice } from "./apiSlice";
import { ADOPTER_URL } from "../../constants";

export const adopterApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAdopter: build.query({
      query: (id) => ({
        url: `${ADOPTER_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetAdopterQuery } = adopterApiSlice;
