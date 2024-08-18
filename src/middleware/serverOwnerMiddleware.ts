import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../types/userRequest";
import Server from "../models/Server";

const serverOwnerMiddleware = async (
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
    const server = await Server.findById(serverId).populate("owner");

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    if (String(server.owner) !== String(user._id)) {
      return res
        .status(403)
        .json({ message: "Access denied. Server owner only." });
    }

    next();
  } catch (error) {
    console.error("Error checking server ownership:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default serverOwnerMiddleware;
