import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IStatistic extends Document {
  value: number;
  label: string;
  suffix: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const statisticSchema = new Schema<IStatistic>(
  {
    value: {
      type: Number,
      required: [true, 'Value is required'],
    },
    label: {
      type: String,
      required: [true, 'Label is required'],
      trim: true,
    },
    suffix: {
      type: String,
      default: '',
      trim: true,
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

const Statistic: Model<IStatistic> = 
  mongoose.models.Statistic || 
  mongoose.model<IStatistic>('Statistic', statisticSchema);

export default Statistic;
