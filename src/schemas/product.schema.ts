import { Timestamp } from "mongodb";
import { model, Schema, Types } from "mongoose";

interface Image {
  id: string;
  name: string;
  url: string;
}

interface Option {
  name: string;
  quantity: number;
}

interface Product {
  name: string;
  price: number;
  description: string;
  shippingInfo: string;
  seller: Types.ObjectId;
  option: [];
  image: [];
  orderDeadline: Timestamp;
}

const imageSchema = new Schema<Image>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const optionSchema = new Schema<Option>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  shippingInfo: { type: String, required: true },
  seller: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  option: [optionSchema],
  image: [imageSchema],
  orderDeadline: { type: Timestamp, required: true },
});
productSchema.set("timestamps", true);
const Product = model<Product>("User", productSchema);

export { Product };
