import { useSession } from "next-auth/react";

const GetActiveUser = () => {
  const { data: session } = useSession();

  // @ts-ignore
  const access_token = session;
  return access_token;
};

export default GetActiveUser;
