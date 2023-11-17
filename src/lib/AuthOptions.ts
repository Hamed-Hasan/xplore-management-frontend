import { BaseUrl } from "@/helpers/config";
import { jwtHelpers } from "@/helpers/jwtHelpers";
import { getNewAccessToken } from "@/services/getNewAccessToken";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "Xplore",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email.....",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${BaseUrl()}/auth/sign-in`, {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          const verifiedToken: any = jwtHelpers.verifyToken(
            data?.access_token,
            process.env.JWT_SECRET!
          );
          if (res.ok && data) {
            return {
              ...{ user: data },
              ...verifiedToken,
            };
          }
        } catch (error: any) {
          console.log(error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      const verifiedToken = jwtHelpers.verifyToken(
        token?.access_token,
        process.env.JWT_SECRET!
      );
      if (!verifiedToken) {
        const data = await getNewAccessToken(token?.user?.refresh_token);
        token.access_token = data?.access_token;
      }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/",
  },
};
