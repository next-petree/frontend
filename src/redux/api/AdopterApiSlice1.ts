import { apiSlice } from "./ApiSlice1";
import { ADOPTER_URL, RESERVATION_URL } from "../../constants";

export const adopterApiSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAdopter: build.query({
      query: id => ({
        url: `${ADOPTER_URL}/${id}`,
      }),
    }),
    makeReservation: build.mutation({
      query: data => ({
        url: RESERVATION_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAdopterQuery, useMakeReservationMutation } =
  adopterApiSlice;
