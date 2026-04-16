import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IFullWidthSection extends Document {
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const fullWidthSectionSchema = new Schema<IFullWidthSection>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
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
    backgroundImage: {
      type: String,
      required: [true, 'Background image URL is required'],
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

const FullWidthSection: Model<IFullWidthSection> = 
  mongoose.models.FullWidthSection || 
  mongoose.model<IFullWidthSection>('FullWidthSection', fullWidthSectionSchema);

export default FullWidthSection;
