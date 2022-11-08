import { Timestamp } from "mongodb";
import { model, Schema, Types } from "mongoose";

interface Image {
  id: string;
  name: string;
  url: string;
}

interface Option {
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  name: string;
  description: string;
  shippingInfo: string;
  sellerId: Types.ObjectId;
  option: [];
  image: [];
  orderDeadline: Date;
  deletedAt: Date;
}

const imageSchema = new Schema<Image>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const optionSchema = new Schema<Option>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  shippingInfo: { type: String, required: true },
  sellerId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  option: [optionSchema],
  image: [imageSchema],
  orderDeadline: { type: Date, required: true },
  deletedAt: { type: Date, default: null },
});
productSchema.set("timestamps", true);
const Product = model<Product>("User", productSchema);

export { Product };
