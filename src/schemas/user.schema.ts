import { Timestamp } from "mongodb";
import { model, Schema } from "mongoose";

interface Seller {
  sellerName: string;
  account: number;
}

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  nationality: string;
  seller?: {};
  deletedAt: Timestamp;
}

const sellerSchema = new Schema<Seller>({
  sellerName: { type: String, required: false },
  account: { type: Number, required: false },
});

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  nationality: { type: String, required: true },
  seller: sellerSchema,
  deletedAt: { type: Timestamp, default: null },
});
userSchema.set("timestamps", true);
const User = model<User>("User", userSchema);

export { User };
