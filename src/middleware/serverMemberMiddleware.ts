import { Response, NextFunction } from "express";
import { UserRequest } from "../types/userRequest";
import Server from "../models/Server";
import { Schema } from "mongoose";

const memberMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;
  const serverId = req.params.serverId;

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const server = await Server.findById(serverId);

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    if (!server.members.includes(new Schema.ObjectId(user._id))) {
      return res
        .status(403)
        .json({ message: "Access denied. Not a member of the server." });
    }

    next();
  } catch (error) {
    console.error("Error checking server membership:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default memberMiddleware;
