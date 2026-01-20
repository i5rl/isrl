export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  startDate: Date;
  endDate?: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
  current: boolean;
  companyUrl?: string;
  location: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  yearsOfExperience: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  gpa?: number;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expirationDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Form types
export interface FormError {
  [key: string]: string;
}

export interface FormState<T> {
  data: T;
  errors: FormError;
  isLoading: boolean;
  isSubmitted: boolean;
}

// Enums
export enum ProjectCategory {
  WEB_APPLICATION = "web-application",
  MOBILE_APP = "mobile-app",
  API = "api",
  LIBRARY = "library",
  TOOL = "tool",
  OTHER = "other",
}

export enum ProjectStatus {
  COMPLETED = "completed",
  IN_PROGRESS = "in-progress",
  MAINTAINED = "maintained",
  ARCHIVED = "archived",
}

export enum SkillCategory {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASE = "database",
  DEVOPS = "devops",
  MOBILE = "mobile",
  DESIGN = "design",
  TOOLS = "tools",
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  EXPERT = "expert",
}

// Navigation
export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

// Theme
export type Theme = "light" | "dark" | "system";

// Animation
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}
