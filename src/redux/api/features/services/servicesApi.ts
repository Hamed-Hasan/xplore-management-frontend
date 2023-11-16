import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    createServices: build.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    getServices: build.query({
      query: (args) => ({
        url: "/services",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.services],
    }),
    getSingleServices: build.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),
    updateServices: build.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    deleteServices: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServicesQuery,
  useCreateServicesMutation,
  useDeleteServicesMutation,
  useUpdateServicesMutation,
} = servicesApi;
