import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  linkedIn?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    bio: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    linkedIn: {
      type: String,
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

const TeamMember: Model<ITeamMember> = 
  mongoose.models.TeamMember || 
  mongoose.model<ITeamMember>('TeamMember', teamMemberSchema);

export default TeamMember;
