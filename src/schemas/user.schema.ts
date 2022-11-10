import mongoose, { model, models, Schema, Types } from "mongoose";

export interface ISeller {
  name: string;
  account: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  nationality: string;
  seller: ISeller;
  deletedAt: Date;
}

export const sellerSchema = new Schema<ISeller>({
  name: String,
  account: String,
});

export const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  nationality: { type: String, required: true },
  seller: sellerSchema,
  deletedAt: { type: Date, default: null },
});
userSchema.set("timestamps", true);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
