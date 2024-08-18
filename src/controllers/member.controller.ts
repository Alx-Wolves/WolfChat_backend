import { Request, Response } from "express";
import Server from "../models/Server";

export const addMember = async (req: Request, res: Response) => {
  const serverId = req.params.serverId;
  const userId = req.body.userId;

  try {
    const server = await Server.findById(serverId);

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    if (server.members.includes(userId)) {
      return res.status(400).json({ message: "User is already a member" });
    }

    server.members.push(userId);
    await server.save();

    res.status(200).json({ message: "Member added successfully" });
  } catch (error) {
    console.error("Error adding member:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const removeMember = async (req: Request, res: Response) => {
  const serverId = req.params.serverId;
  const userId = req.body.userId;

  try {
    const server = await Server.findById(serverId);

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    if (!server.members.includes(userId)) {
      return res.status(400).json({ message: "User is not a member" });
    }

    server.members = server.members.filter(
      (member) => member.toString() !== userId
    );
    await server.save();

    res.status(200).json({ message: "Member removed successfully" });
  } catch (error) {
    console.error("Error removing member:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const listMembers = async (req: Request, res: Response) => {
  const serverId = req.params.serverId;

  try {
    const server = await Server.findById(serverId).populate("members");

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    res.status(200).json({ members: server.members });
  } catch (error) {
    console.error("Error listing members:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
