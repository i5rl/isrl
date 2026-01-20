import { ReactNode } from "react";

// Component Props
export interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

export interface AnimatedSectionProps extends SectionProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

// Form Types
export interface FormError {
  message: string;
  field?: string;
}

export interface FormState<T = any> {
  data: T;
  errors: FormError[];
  isLoading: boolean;
  isSubmitted: boolean;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: FormError[];
}

// Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Layout Types
export interface LayoutProps {
  children: ReactNode;
  metadata?: PageMetadata;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  canonical?: string;
  noIndex?: boolean;
}
