import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const reviewsApi = api.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getAllReviews: build.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
  }),
});

export const { useCreateReviewMutation, useGetAllReviewsQuery } = reviewsApi;
