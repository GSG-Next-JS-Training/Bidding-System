import mongoose from "mongoose";

export interface IChat extends Document {
    chatName: string;
    isGroup: boolean;
    users: mongoose.Schema.Types.ObjectId[];
    latestMessage: mongoose.Schema.Types.ObjectId;
    groupAdmin: mongoose.Schema.Types.ObjectId;
}
export const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const ChatModel = mongoose.models.chat ?? mongoose.model<IChat>('chat', chatSchema);