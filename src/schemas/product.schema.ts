import mongoose, { model, models, Schema, Types } from "mongoose";

export interface IOption {
  name: string;
  price: number;
  quantity: number;
}

export interface IProduct {
  name: string;
  purchaseNation: string;
  description: string;
  shippingInfo: string;
  seller: Types.ObjectId;
  option: [];
  image: string;
  category: Types.ObjectId;
  orderDeadline: Date;
  deletedAt: Date;
}

export const optionSchema = new Schema<IOption>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  purchaseNation: { type: String, required: true },
  description: { type: String, required: true },
  shippingInfo: { type: String, required: true },
  seller: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  option: [optionSchema],
  image: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true, ref: "Market" },
  orderDeadline: { type: Date, required: true },
  deletedAt: { type: Date, default: null },
});
productSchema.set("timestamps", true);

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
