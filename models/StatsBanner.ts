import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IStatsBanner extends Document {
  backgroundImage: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const statsBannerSchema = new Schema<IStatsBanner>(
  {
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

const StatsBanner: Model<IStatsBanner> = 
  mongoose.models.StatsBanner || 
  mongoose.model<IStatsBanner>('StatsBanner', statsBannerSchema);

export default StatsBanner;
