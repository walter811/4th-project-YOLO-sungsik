import mongoose, { model, models, Schema } from "mongoose";

export interface Market {
  mainCategory: string;
  subCategory: string;
}

export const marketSchema = new Schema<Market>({
  mainCategory: { type: String, required: true, unique: true },
  subCategory: { type: String, required: true, unique: true },
});

const Market = mongoose.model<Market>("Market", marketSchema);
export default Market;
