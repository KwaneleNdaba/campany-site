import mongoose, { Document, Model, Schema } from "mongoose";

export interface IWhyChooseUsContent extends Document {
  sectionBadge: string;
  mainTitle: string;
  highlightedWord: string;
  subtitle: string;
  backgroundImage: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const whyChooseUsContentSchema = new Schema<IWhyChooseUsContent>(
  {
    sectionBadge: { type: String, default: "", trim: true },
    mainTitle: { type: String, default: "", trim: true },
    highlightedWord: { type: String, default: "", trim: true },
    subtitle: { type: String, default: "", trim: true },
    backgroundImage: { type: String, default: "" },
    ctaTitle: { type: String, default: "", trim: true },
    ctaDescription: { type: String, default: "", trim: true },
    ctaButtonText: { type: String, default: "", trim: true },
    ctaButtonLink: { type: String, default: "/contact", trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const WhyChooseUsContent: Model<IWhyChooseUsContent> =
  mongoose.models.WhyChooseUsContent ||
  mongoose.model<IWhyChooseUsContent>("WhyChooseUsContent", whyChooseUsContentSchema);

export default WhyChooseUsContent;
