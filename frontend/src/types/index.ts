export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillItem {
  name: string;
  category: string;
  iconName: string;
  level?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
}

export interface CommunityItem {
  role: string;
  organization: string;
  period: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    roleTag: string;
    headline: string;
    bio: string;
    location: string;
    availability: string;
    profileImage: string;
    tagline: string;
    resumeUrl?: string;
  };
  stats: StatItem[];
  categories: string[];
  projects: Project[];
  skills: SkillItem[];
  process: ProcessStep[];
  experience?: ExperienceItem[];
  education?: EducationItem[];
  certifications?: CertificationItem[];
  community?: CommunityItem[];
  testimonials: Testimonial[];
  contactInfo: {
    email: string;
    phone?: string;
    website: string;
    handle: string;
    location: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

