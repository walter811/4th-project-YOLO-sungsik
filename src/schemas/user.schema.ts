import { Timestamp } from "mongodb";
import { model, Schema, Types } from "mongoose";

interface Seller {
  sellerName: string;
  account: number;
}

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  nationality: string;
  seller?: {};
  deletedAt: Date;
}

const sellerSchema = new Schema<Seller>({
  sellerName: { type: String, required: false },
  account: { type: Number, required: false },
});

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  nationality: { type: String, required: true },
  seller: sellerSchema,
  deletedAt: { type: Date, default: null },
});
userSchema.set("timestamps", true);
const User = model<User>("User", userSchema);

export { User };
