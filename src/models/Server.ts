import mongoose, { Schema, Document } from "mongoose";

interface IServer extends Document {
  name: string;
  owner: mongoose.Schema.Types.ObjectId;
  channels: mongoose.Schema.Types.ObjectId[];
  members: mongoose.Schema.Types.ObjectId[];
}

const ServerSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Server name is required"],
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    channels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Channel",
      },
    ],
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

const Server = mongoose.model<IServer>("Server", ServerSchema);
export default Server;
