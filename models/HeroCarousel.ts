import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IHeroCarouselItem extends Document {
  title: string;
  status: 'TRADING' | 'DEVELOPMENT' | 'COMPLETED' | 'COMING SOON';
  location: string;
  description: string;
  image: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const heroCarouselItemSchema = new Schema<IHeroCarouselItem>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['TRADING', 'DEVELOPMENT', 'COMPLETED', 'COMING SOON'],
      default: 'DEVELOPMENT',
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
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

const HeroCarouselItem: Model<IHeroCarouselItem> = 
  mongoose.models.HeroCarouselItem || 
  mongoose.model<IHeroCarouselItem>('HeroCarouselItem', heroCarouselItemSchema);

export default HeroCarouselItem;
