import { Request, Response } from "express";
import { createMessageSchema } from "../validations/messageValidation";
import Message from "../models/Message";
import { ZodError } from "zod";

export const createMessage = async (req: Request, res: Response) => {
  try {
    const validatedData = createMessageSchema.parse(req.body);
    const newMessage = new Message(validatedData);
    await newMessage.save();
    res.status(201).json({ message: newMessage });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const messages = await Message.find({ channel: channelId });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
