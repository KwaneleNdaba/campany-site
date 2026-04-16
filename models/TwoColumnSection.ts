import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITwoColumnSection extends Document {
  leftImage: string;
  rightImage: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const twoColumnSectionSchema = new Schema<ITwoColumnSection>(
  {
    leftImage: {
      type: String,
      required: [true, 'Left image URL is required'],
    },
    rightImage: {
      type: String,
      required: [true, 'Right image URL is required'],
    },
    badge: {
      type: String,
      required: [true, 'Badge text is required'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    buttonText: {
      type: String,
      required: [true, 'Button text is required'],
      trim: true,
    },
    buttonLink: {
      type: String,
      required: [true, 'Button link is required'],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const TwoColumnSection: Model<ITwoColumnSection> = 
  mongoose.models.TwoColumnSection || 
  mongoose.model<ITwoColumnSection>('TwoColumnSection', twoColumnSectionSchema);

export default TwoColumnSection;
