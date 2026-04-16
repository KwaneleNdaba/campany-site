import mongoose, { Document, Model, Schema } from "mongoose";

export interface IServicesPageContent extends Document {
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const servicesPageContentSchema = new Schema<IServicesPageContent>(
  {
    bannerTitle: { type: String, default: "Our Services", trim: true },
    bannerSubtitle: {
      type: String,
      default: "Comprehensive property development solutions",
      trim: true,
    },
    bannerImage: { type: String, default: "" },
    sectionEyebrow: { type: String, default: "Our Expertise", trim: true },
    sectionTitle: {
      type: String,
      default: "Comprehensive Development Solutions",
      trim: true,
    },
    sectionSubtitle: {
      type: String,
      default:
        "From concept to completion, we deliver world-class property developments that transform communities and create lasting value.",
      trim: true,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ServicesPageContent: Model<IServicesPageContent> =
  mongoose.models.ServicesPageContent ||
  mongoose.model<IServicesPageContent>(
    "ServicesPageContent",
    servicesPageContentSchema
  );

export default ServicesPageContent;
