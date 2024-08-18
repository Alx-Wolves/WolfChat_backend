import { z } from "zod";

export const createServerSchema = z.object({
  name: z.string().nonempty("Server name is required"),
  owner: z.string().uuid("Invalid owner ID"),
  channels: z.array(z.string().uuid("Invalid channel ID")).optional(),
});
