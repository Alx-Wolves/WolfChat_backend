import mongoose, { Schema, Document } from "mongoose";

interface IMessage extends Document {
  content: string;
  sender: mongoose.Schema.Types.ObjectId;
  channel: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Sender is required"],
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "Channel",
      required: [true, "Channel is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model<IMessage>("Message", MessageSchema);
export default Message;
