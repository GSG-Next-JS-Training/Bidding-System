import { model, models, Schema, Types } from "mongoose";

export interface IMessage extends Document {
    sender: Schema.Types.ObjectId;
    content: string;
    chatId: Schema.Types.ObjectId;
}

export const messageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Types.ObjectId,
      ref: "user",
    },
    content: { type: String, trim: true },
    chatId: { type: Types.ObjectId, ref: "chat" },
  },
  { timestamps: true }
);

export const MessageModel = models.message ?? model<IMessage>('message', messageSchema);