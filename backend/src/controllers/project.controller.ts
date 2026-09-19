import { Request, Response, NextFunction } from 'express';
import { ProjectModel } from '../models/project.model';
import mongoose from 'mongoose';

// Static fallback dataset matching frontend portfolio.ts
const defaultProjects = [
  {
    id: "01",
    title: "BRANDZEN STUDIO",
    category: "Brand Identity & Website",
    description: "Full brand identity system and high-converting web platform designed for a creative studio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Figma", "React", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/example/brandzen",
    liveUrl: "https://example.com/brandzen"
  },
  {
    id: "02",
    title: "MOTION FIT APP",
    category: "UI/UX Design",
    description: "Intuitive mobile fitness tracker app interface with personalized habit metrics and social challenges.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tags: ["Figma", "iOS", "Mobile UX"],
    featured: true,
    githubUrl: "https://github.com/example/motion-fit",
    liveUrl: "https://example.com/motion-fit"
  },
  {
    id: "03",
    title: "WILDERRA RETREAT",
    category: "Web Design",
    description: "Immersive luxury eco-resort digital experience focused on storytelling, booking, and serene visuals.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    tags: ["Webflow", "Animation", "Branding"],
    featured: true,
    githubUrl: "https://github.com/example/wilderra",
    liveUrl: "https://example.com/wilderra"
  },
  {
    id: "04",
    title: "AURORA SKINCARE",
    category: "Packaging Design",
    description: "Minimalist sustainable skincare packaging and e-commerce experience celebrating natural radiance.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    tags: ["Packaging", "3D Render", "Shopify"],
    featured: true,
    githubUrl: "https://github.com/example/aurora",
    liveUrl: "https://example.com/aurora"
  }
];

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const dbProjects = await ProjectModel.find().sort({ order: 1 });
      if (dbProjects.length > 0) {
        return res.json({
          success: true,
          count: dbProjects.length,
          data: dbProjects,
        });
      }
    }

    return res.json({
      success: true,
      count: defaultProjects.length,
      data: defaultProjects,
    });
  } catch (error) {
    return next(error);
  }
};
