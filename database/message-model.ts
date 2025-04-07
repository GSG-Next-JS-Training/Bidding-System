import mongoose from "mongoose";

export interface IMessage extends Document {
    sender: mongoose.Schema.Types.ObjectId;
    content: string;
    chat: mongoose.Schema.Types.ObjectId;
}

export const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
  },
  { timestamps: true }
);

export const MessageModel = mongoose.models.message ?? mongoose.model<IMessage>('message', messageSchema);