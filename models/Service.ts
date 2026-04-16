import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  image: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>(
  {
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
    icon: {
      type: String,
      default: 'Building2',
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    order: {
      type: Number,
      default: 0,
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

const Service: Model<IService> = 
  mongoose.models.Service || 
  mongoose.model<IService>('Service', serviceSchema);

export default Service;
