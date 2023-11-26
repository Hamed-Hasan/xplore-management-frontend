import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const getUserSession = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });

    if (session) {
      // Session is available
      res.status(200).json({ session });
    } else {
      // Session not found
      res.status(401).json({ error: "Session not found" });
    }
  } catch (error) {
    console.error("Error getting session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getUserSession;
