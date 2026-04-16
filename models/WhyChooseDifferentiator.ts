import mongoose, { Document, Model, Schema } from "mongoose";

export interface IWhyChooseDifferentiator extends Document {
  icon: string;
  title: string;
  description: string;
  color: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const whyChooseDifferentiatorSchema = new Schema<IWhyChooseDifferentiator>(
  {
    icon: { type: String, default: "Award", trim: true },
    title: { type: String, default: "", trim: true },
    description: { type: String, default: "", trim: true },
    color: { type: String, default: "from-amber-500 to-amber-600", trim: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const WhyChooseDifferentiator: Model<IWhyChooseDifferentiator> =
  mongoose.models.WhyChooseDifferentiator ||
  mongoose.model<IWhyChooseDifferentiator>(
    "WhyChooseDifferentiator",
    whyChooseDifferentiatorSchema
  );

export default WhyChooseDifferentiator;
