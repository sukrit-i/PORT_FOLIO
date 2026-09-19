import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "SUKRITI SONAM PATTNAIK",
    roleTag: "SOFTWARE ENGINEER & CLOUD / AI DEVELOPER",
    headline: "ENGINEERING SECURE CLOUD IDENTITY, SCALABLE FULL-STACK APPS, AND INTELLIGENT AI SYSTEMS.",
    bio: "Computer Science Engineer with hands-on industry experience in enterprise cloud identity (OAuth 2.0, SAML, Azure), full-stack web development (React.js, Spring Boot, Express, MongoDB), and conversational AI/NLP solutions. Dedicated to building robust, high-performance distributed applications.",
    location: "PUNJAB / CHENNAI, INDIA",
    availability: "OPEN FOR ENGINEERING ROLES",
    profileImage: "/profile.jpg",
    tagline: "BUILDING SECURE, RESILIENT & INTELLIGENT SYSTEMS",
    resumeUrl: "/resume.pdf"
  },
  stats: [
    { value: "2+", label: "INDUSTRY INTERNSHIPS" },
    { value: "10+", label: "PROJECTS & MODULES BUILT" },
    { value: "40%", label: "BACKEND EFFICIENCY BOOST" },
    { value: "2+", label: "TECH COMMUNITIES (GDSC & AI)" }
  ],
  categories: ["FULL STACK", "CLOUD & IAM", "AI & ML"],
  projects: [
    {
      id: "01",
      title: "MERN AUTHENTICATION SYSTEM",
      category: "Full-Stack Development",
      description: "Full-stack authentication platform featuring secure JWT-based login, registration, protected routes, and automated 6-digit OTP email verification with password reset workflows.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      tags: ["React.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Nodemailer"],
      featured: true,
      githubUrl: "https://github.com/sukrit-i",
      liveUrl: "https://github.com/sukrit-i"
    },
    {
      id: "02",
      title: "AI EMAIL WRITING ASSISTANT",
      category: "AI & Full-Stack",
      description: "Intelligent web app generating high-quality personalized email drafts from short user prompts with professional tone customization, reducing email drafting time by 60%.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      tags: ["React.js", "Spring Boot", "Java", "OpenAI API", "REST APIs", "Nodemailer"],
      featured: true,
      githubUrl: "https://github.com/sukrit-i",
      liveUrl: "https://github.com/sukrit-i"
    },
    {
      id: "03",
      title: "ENTERPRISE CLOUD IAM & FEDERATION",
      category: "Cloud & Security",
      description: "Identity federation architecture utilizing OAuth 2.0, OpenID Connect (OIDC), and SAML protocols with Azure cloud fundamentals for secure SSO and access control.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      tags: ["Azure Cloud", "OAuth 2.0", "OIDC", "SAML", "SSO", "Access Mgmt"],
      featured: true,
      githubUrl: "https://github.com/sukrit-i",
      liveUrl: "https://github.com/sukrit-i"
    },
    {
      id: "04",
      title: "AI VIRTUAL ASSISTANT & NLP ENGINE",
      category: "AI/ML & NLP",
      description: "AI-driven virtual assistant leveraging NLP intent classification, TF-IDF vectorization, entity extraction, and optimized response selection with 40% higher throughput.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: ["Python", "NLP", "TF-IDF", "Machine Learning", "REST API"],
      featured: true,
      githubUrl: "https://github.com/sukrit-i",
      liveUrl: "https://github.com/sukrit-i"
    }
  ],
  skills: [
    { name: "React.js", category: "Frontend", iconName: "react" },
    { name: "Node / Express", category: "Backend", iconName: "nodejs" },
    { name: "Spring Boot", category: "Backend (Java)", iconName: "springboot" },
    { name: "Python", category: "AI / Data", iconName: "python" },
    { name: "Azure Cloud", category: "Cloud & IAM", iconName: "cloud" },
    { name: "MongoDB & SQL", category: "Databases", iconName: "database" },
    { name: "OAuth 2.0 / SAML", category: "Security & IAM", iconName: "shield" },
    { name: "GenAI & LLMs", category: "AI/ML", iconName: "brain" },
    { name: "Docker & Git", category: "DevOps & Tools", iconName: "docker" }
  ],
  process: [
    {
      step: "01",
      title: "DISCOVER",
      description: "Analyzing system requirements, security threat surfaces, user personas, and target cloud architectures."
    },
    {
      step: "02",
      title: "ARCHITECT",
      description: "Designing database schemas, API contracts, OAuth 2.0 authentication flows, and scalable service boundaries."
    },
    {
      step: "03",
      title: "DEVELOP",
      description: "Writing clean, maintainable code with React, Spring Boot, Node.js, and Python following modern clean architecture."
    },
    {
      step: "04",
      title: "SECURE & TEST",
      description: "Enforcing JWT/OIDC authentication, strict validation, OTP workflows, and comprehensive unit & integration testing."
    },
    {
      step: "05",
      title: "DEPLOY",
      description: "Containerizing with Docker, configuring Azure cloud workloads, optimizing API throughput, and continuous monitoring."
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Cloud Intern - Identity Collaboration",
      company: "Identity Collaboration",
      period: "Jan 2026 – Jun 2026",
      location: "India",
      points: [
        "Working on identity protocols and collaboration platform integrations with hands-on exposure to OAuth 2.0, OpenID Connect (OIDC), and SAML-based authentication and authorization flows.",
        "Gaining foundational expertise in Azure cloud services, applying Azure fundamentals across project implementations.",
        "Contributing to real-world enterprise projects involving secure identity federation, SSO configurations, and enterprise access management."
      ],
      skills: ["Azure Cloud", "OAuth 2.0", "OpenID Connect", "SAML", "SSO", "Access Management"]
    },
    {
      id: "exp-2",
      role: "Intern - AI & Chatbot Development",
      company: "ProV International",
      period: "Jun 2024 – Jul 2024",
      location: "India",
      points: [
        "Developed AI-powered chatbots and virtual assistants using NLP techniques (intent classification, TF-IDF vectorization, entity extraction) to automate user support workflows.",
        "Optimized conversational flow and response selection using ML/statistical methods, increasing response accuracy by 25% and reducing fallback errors by 30%.",
        "Deployed the solution end-to-end with scalable REST API–based integration, improving system efficiency and throughput by 40% through backend optimization."
      ],
      skills: ["Python", "NLP", "Machine Learning", "TF-IDF", "REST APIs", "Backend Optimization"]
    }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor’s in Computer Science and Engineering",
      period: "Since Aug 2022",
      location: "Punjab, India"
    },
    {
      institution: "D.A.V. Public School",
      degree: "Class XII (Science Stream)",
      period: "Apr 2021 – Mar 2022",
      location: "Chennai, Tamil Nadu"
    }
  ],
  certifications: [
    {
      name: "Privacy and Security in Online Social Media",
      issuer: "NPTEL – Swayam",
      period: "Jan 2025 – May 2025"
    }
  ],
  community: [
    {
      role: "Core Team Member",
      organization: "Google Developer Student Club (GDSC)",
      period: "Since Jan 2023"
    },
    {
      role: "Core Team Member",
      organization: "AI Jalandhar Community",
      period: "Since Apr 2024"
    }
  ],
  testimonials: [
    {
      id: "t1",
      author: "ENGINEERING LEAD",
      role: "Cloud Identity Mentor",
      company: "Identity Collaboration",
      quote: "Sukriti demonstrates a sharp grasp of modern identity federation, OAuth 2.0, and cloud fundamentals. Her disciplined engineering mindset and attention to security are exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      rating: 5
    },
    {
      id: "t2",
      author: "AI SOLUTIONS MENTOR",
      role: "Technical Lead",
      company: "ProV International",
      quote: "Sukriti's work on conversational NLP chatbots improved response accuracy by 25% and boosted throughput by 40%. A proactive problem solver with strong full-stack and ML capabilities.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      rating: 5
    },
    {
      id: "t3",
      author: "GDSC COMMUNITY LEAD",
      role: "Chapter Lead",
      company: "Google Developer Student Club",
      quote: "A passionate contributor to the developer ecosystem, Sukriti consistently shares knowledge, mentors peers in AI and web tech, and drives impactful student workshops.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      rating: 5
    }
  ],
  contactInfo: {
    email: "sukritisonampattnaik@gmail.com",
    phone: "+91 7305867387",
    website: "github.com/sukrit-i",
    handle: "linkedin.com/in/sukriti-sonam-pattnaik",
    location: "Punjab / Chennai, India"
  },
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/sukrit-i" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/sukriti-sonam-pattnaik" },
    { platform: "Email", url: "mailto:sukritisonampattnaik@gmail.com" },
    { platform: "Resume", url: "/resume.pdf" }
  ]
};
