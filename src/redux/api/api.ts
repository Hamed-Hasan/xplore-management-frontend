import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tags/types";
import { BaseUrl } from "@/helpers/config";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: BaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});

export default api;
