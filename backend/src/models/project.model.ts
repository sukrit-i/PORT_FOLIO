import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false },
    githubUrl: { type: String },
    liveUrl: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const ProjectModel = model<IProject>('Project', ProjectSchema);
