import mongoose, { Schema, Document } from "mongoose";

interface IFriendship extends Document {
  user1: mongoose.Schema.Types.ObjectId;
  user2: mongoose.Schema.Types.ObjectId;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const FriendshipSchema: Schema = new Schema(
  {
    user1: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User1 is required"],
    },
    user2: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User2 is required"],
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Friendship = mongoose.model<IFriendship>("Friendship", FriendshipSchema);
export default Friendship;
