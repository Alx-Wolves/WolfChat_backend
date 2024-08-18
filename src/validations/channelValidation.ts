import { z } from "zod";

export const createChannelSchema = z.object({
  name: z.string().min(1, "Channel name is required"),
  server: z.string().uuid("Invalid server ID"),
  members: z.array(z.string().uuid("Invalid user ID")).optional(),
});
