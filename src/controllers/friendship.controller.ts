import { Request, Response } from "express";
import {
  createFriendshipSchema,
  updateFriendshipSchema,
} from "../validations/friendshipValidation";
import Friendship from "../models/Friendship";
import { ZodError } from "zod";

export const sendFriendRequest = async (req: Request, res: Response) => {
  try {
    const validatedData = createFriendshipSchema.parse(req.body);
    const existingRequest = await Friendship.findOne({
      user1: validatedData.user1,
      user2: validatedData.user2,
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Friend request already sent" });
    }

    const newFriendship = new Friendship(validatedData);
    await newFriendship.save();
    res
      .status(201)
      .json({ message: "Friend request sent", friendship: newFriendship });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateFriendshipStatus = async (req: Request, res: Response) => {
  try {
    const { friendshipId } = req.params;
    const validatedData = updateFriendshipSchema.parse(req.body);
    const updatedFriendship = await Friendship.findByIdAndUpdate(
      friendshipId,
      validatedData,
      {
        new: true,
      }
    );

    if (!updatedFriendship) {
      return res.status(404).json({ message: "Friendship not found" });
    }

    res.json({
      message: "Friendship status updated",
      friendship: updatedFriendship,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getFriends = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const friendships = await Friendship.find({
      $or: [
        { user1: userId, status: "accepted" },
        { user2: userId, status: "accepted" },
      ],
    }).populate("user1 user2");

    res.json(friendships);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
