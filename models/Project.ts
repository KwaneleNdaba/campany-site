import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  type: 'Commercial' | 'Retail' | 'Industrial' | 'Residential' | 'Mixed-Use';
  location: string;
  status: 'Completed' | 'Under Construction' | 'Coming Soon' | 'Planning';
  image: string;
  description?: string;
  area?: string;
  units?: string;
  completion?: string;
  architect?: string;
  features?: string[];
  amenities?: string[];
  gallery?: string[];
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['Commercial', 'Retail', 'Industrial', 'Residential', 'Mixed-Use'],
      required: [true, 'Project type is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['Completed', 'Under Construction', 'Coming Soon', 'Planning'],
      default: 'Planning',
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    description: {
      type: String,
      trim: true,
    },
    area: String,
    units: String,
    completion: String,
    architect: String,
    features: [String],
    amenities: [String],
    gallery: [String],
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

const Project: Model<IProject> = 
  mongoose.models.Project || 
  mongoose.model<IProject>('Project', projectSchema);

export default Project;
