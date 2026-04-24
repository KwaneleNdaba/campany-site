import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IFeaturedProjectsContent extends Document {
  title: string;
  subtitle: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const featuredProjectsContentSchema = new Schema<IFeaturedProjectsContent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      default: 'Featured Developments',
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required'],
      trim: true,
      default: 'A showcase of our most iconic projects that redefine the urban landscape and set new standards in property development.',
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

const FeaturedProjectsContent: Model<IFeaturedProjectsContent> = 
  mongoose.models.FeaturedProjectsContent || 
  mongoose.model<IFeaturedProjectsContent>('FeaturedProjectsContent', featuredProjectsContentSchema);

export default FeaturedProjectsContent;
