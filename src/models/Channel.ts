import mongoose, { Schema, Document } from "mongoose";

interface IChannel extends Document {
  name: string;
  server: mongoose.Schema.Types.ObjectId;
  members: mongoose.Schema.Types.ObjectId[];
}

const ChannelSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Channel name is required"],
      trim: true,
    },
    server: {
      type: Schema.Types.ObjectId,
      ref: "Server",
      required: [true, "Server is required"],
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model<IChannel>("Channel", ChannelSchema);
export default Channel;
