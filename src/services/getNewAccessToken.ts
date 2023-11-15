import { BaseUrl } from "@/helpers/config";

export const getNewAccessToken = async (token: string) => {
  try {
    const res = await fetch(`${BaseUrl()}/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: token }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
