import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IFeaturedProjects extends Document {
  /** Array of Project _id strings in display order */
  projectIds: string[];
  /** Maximum number of projects to display (default 8) */
  displayLimit: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const featuredProjectsSchema = new Schema<IFeaturedProjects>(
  {
    projectIds: {
      type: [String],
      default: [],
      validate: {
        validator: function(v: string[]) {
          // Ensure no duplicates
          return v.length === new Set(v).size;
        },
        message: 'Project IDs must be unique',
      },
    },
    displayLimit: {
      type: Number,
      default: 8,
      min: [1, 'Display limit must be at least 1'],
      max: [20, 'Display limit cannot exceed 20'],
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

const FeaturedProjects: Model<IFeaturedProjects> = 
  mongoose.models.FeaturedProjects || 
  mongoose.model<IFeaturedProjects>('FeaturedProjects', featuredProjectsSchema);

export default FeaturedProjects;
