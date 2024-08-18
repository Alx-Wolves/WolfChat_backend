import { Request, Response } from "express";
import { createServerSchema } from "../validations/serverValidation";
import Server from "../models/Server";
import { ZodError } from "zod";

export const createServer = async (req: Request, res: Response) => {
  try {
    const validatedData = createServerSchema.parse(req.body);
    const newServer = new Server(validatedData);
    await newServer.save();
    res
      .status(201)
      .json({ message: "Server created successfully", server: newServer });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getServers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const servers = await Server.find({ owner: userId });
    res.json(servers);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
