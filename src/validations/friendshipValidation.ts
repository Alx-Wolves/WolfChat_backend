import { z } from "zod";

export const createFriendshipSchema = z.object({
  user1: z.string().uuid("Invalid user ID"),
  user2: z.string().uuid("Invalid user ID"),
});

export const updateFriendshipSchema = z.object({
  status: z.enum(["pending", "accepted", "rejected"]),
});
