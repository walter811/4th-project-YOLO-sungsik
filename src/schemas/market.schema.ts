import mongoose, { Schema } from "mongoose";

export interface IMarket {
  mainCategory: string;
  subCategory: string;
}

export const marketSchema = new Schema<IMarket>({
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
});

const Market = mongoose.model<IMarket>("Market", marketSchema);
export default Market;
