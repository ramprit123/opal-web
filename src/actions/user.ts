"use server";

import { auth } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { status: 403, message: "Unauthorized" };
    }
  } catch (error) {}
};
