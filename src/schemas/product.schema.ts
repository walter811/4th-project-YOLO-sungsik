import { model, models, Schema, Types } from "mongoose";

interface Option {
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  name: string;
  description: string;
  shippingInfo: string;
  seller: Types.ObjectId;
  option: [];
  image: string;
  category: Types.ObjectId;
  orderDeadline: Date;
  deletedAt: Date;
}

const optionSchema = new Schema<Option>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
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

export default models.Product || model<Product>("Product", productSchema);
