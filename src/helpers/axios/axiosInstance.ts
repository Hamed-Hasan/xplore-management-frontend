import { authOptions } from "@/lib/AuthOptions";
import axios from "axios";
import { getSession } from "next-auth/react";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    const session = await getSession(authOptions as any);
    // @ts-ignore
    const accessToken = session?.user?.access_token;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export { instance };
