import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const faqApi = api.injectEndpoints({
  endpoints: (build) => ({
    createFAQ: build.mutation({
      query: (data) => ({
        url: "/faq",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    getAllFAQ: build.query({
      query: (args) => ({
        url: "/faq",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.faq],
    }),
    getSingleFAQ: build.query({
      query: (id) => ({
        url: `/faq/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFAQ: build.mutation({
      query: ({ id, data }) => ({
        url: `/faq/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `/faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useCreateFAQMutation,
  useGetAllFAQQuery,
  useGetSingleFAQQuery,
  useUpdateFAQMutation,
  useDeleteFAQMutation,
} = faqApi;
