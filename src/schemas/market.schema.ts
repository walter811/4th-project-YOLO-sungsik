import { model, models, Schema } from "mongoose";

interface Market {
  mainCategory: string;
  subCategory: string;
}

const marketSchema = new Schema<Market>({
  mainCategory: { type: String, required: true, unique: true },
  subCategory: { type: String, required: true, unique: true },
});

export default models.Market || model<Market>("Market", marketSchema);
