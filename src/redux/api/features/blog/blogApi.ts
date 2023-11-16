import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const blogApi = api.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getAllBlog: build.query({
      query: (args) => ({
        url: "/blog",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.blog],
    }),
    getSingleBlog: build.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    updateBlog: build.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
