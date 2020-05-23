import { RefreshToken } from "../models";

import logger from "../logger";

export const dropSessions = async (userId: string) => {
  const userSessions = await RefreshToken.find({ userId });

  userSessions.forEach(async (session) => {
    try {
      await session.remove();
    } catch (e) {
      logger.error("Error in remove session process", { e });
    }
  });
};
