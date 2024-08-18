import { z } from "zod";

export const createMessageSchema = z.object({
  content: z.string().nonempty("Content is required"),
  sender: z.string().uuid("Invalid sender ID"),
  channel: z.string().uuid("Invalid channel ID"),
});
