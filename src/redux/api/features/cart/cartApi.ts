import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const cartApi = api.injectEndpoints({
  endpoints: (build) => ({
    createCart: build.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    getCart: build.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: [tagTypes.cart],
    }),
    deleteCart: build.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.cart],
    }),
  }),
});

export const { useCreateCartMutation, useGetCartQuery, useDeleteCartMutation } =
  cartApi;
