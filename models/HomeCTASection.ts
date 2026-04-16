import mongoose, { Document, Model, Schema } from "mongoose";

export interface IHomeCTASection extends Document {
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const homeCTASectionSchema = new Schema<IHomeCTASection>(
  {
    title: { type: String, default: "", trim: true },
    buttonText: { type: String, default: "", trim: true },
    buttonLink: { type: String, default: "/contact", trim: true },
    backgroundImage: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const HomeCTASection: Model<IHomeCTASection> =
  mongoose.models.HomeCTASection ||
  mongoose.model<IHomeCTASection>("HomeCTASection", homeCTASectionSchema);

export default HomeCTASection;
