import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../types/userRequest";
import Friendship from "../models/Friendship";

const friendshipMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.user?._id;
  const { targetUserId } = req.params;

  if (!id || !targetUserId) {
    return res.status(400).json({ message: "Invalid request parameters" });
  }

  try {
    const friendship = await Friendship.findOne({
      user: id,
      friend: targetUserId,
    });

    if (!friendship) {
      return res
        .status(403)
        .json({ message: "You are not friends with this user" });
    }

    next();
  } catch (error) {
    console.error("Error checking friendship:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default friendshipMiddleware;
