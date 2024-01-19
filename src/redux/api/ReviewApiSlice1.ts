import { REVIEW_URL } from "../../constants";
import { apiSlice } from "./ApiSlice1";

export const ReviewsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getReview: build.query({
            query: () => ({
                url: REVIEW_URL,
            }),
        }),
        getReviewDetail: build.query({
            query: (id) => ({
                url: `${REVIEW_URL}/${id}`,
            }),
        }),
    }),
});

export const { useGetReviewQuery, useGetReviewDetailQuery } = ReviewsApiSlice;
