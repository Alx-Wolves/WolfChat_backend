import { Request, Response } from "express";
import { createChannelSchema } from "../validations/channelValidation";
import Channel from "../models/Channel";
import { ZodError } from "zod";

export const createChannel = async (req: Request, res: Response) => {
  try {
    const validatedData = createChannelSchema.parse(req.body);
    const newChannel = new Channel(validatedData);
    await newChannel.save();
    res
      .status(201)
      .json({ message: "Channel created successfully", channel: newChannel });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getChannels = async (req: Request, res: Response) => {
  try {
    const { serverId } = req.params;
    const channels = await Channel.find({ server: serverId });
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
