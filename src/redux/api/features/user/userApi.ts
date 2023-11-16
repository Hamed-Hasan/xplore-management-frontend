import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllUser: build.query({
      query: (args) => ({
        url: "/user",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.user],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateSingleUser: build.mutation({
      query: ({ id, userUpdatedInfo }) => ({
        url: `/user/update-single/${id}`,
        method: "PATCH",
        data: userUpdatedInfo,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserRole: build.mutation({
      query: ({ role, id }) => ({
        url: `/user/update-role/${id}`,
        method: "PATCH",
        data: { role },
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetProfileQuery,
  useUpdateUserMutation,
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useDeleteUserMutation,
} = userApi;
