
import mongoose, { Document, Schema } from "mongoose";

interface IRole extends Document {
  name: string;
  permissions: string[];
  guild: Schema.Types.ObjectId;
  members: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const RoleSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    permissions: [{ type: String }],
    guild: { type: Schema.Types.ObjectId, ref: "Guild", required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Role = mongoose.model<IRole>("Role", RoleSchema);
export default Role;
