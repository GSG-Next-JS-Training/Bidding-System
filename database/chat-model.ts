import { model, models, Schema, Types } from "mongoose";

export interface IChat extends Document {
    chatName: string;
    isGroup: boolean;
    users: Types.ObjectId[];
    latestMessage: Schema.Types.ObjectId;
    groupAdmin: Schema.Types.ObjectId;
}
export const chatSchema = new Schema<IChat>(
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
        type: Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: Types.ObjectId,
      ref: "message",
    },
    groupAdmin: {
      type: Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const ChatModel = models.chat ?? model<IChat>('chat', chatSchema);