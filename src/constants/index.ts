import { NavItem } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
  name: "Ian Rosales",
  title: "Senior Full Stack Developer",
  email: "ianrosales634@gmail.com",
  phone: "+54 11 2391 3641",
  location: "Based in Argentina",
  bio: "Full Stack Developer who believes in clean code and exceptional user experiences. It's not just about making things work; it's about creating digital solutions that users love.",
  tagline: "LET'S BUILD SOMETHING AMAZING!",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/i5rl",
    linkedin: "https://linkedin.com/in/ianrosales",
    twitter: "https://twitter.com/ianrosales",
    website: "https://ianrosales.com",
  },
} as const;

// Navigation Items
export const NAVIGATION: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "work", label: "Work", href: "#work" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Animation Settings
export const ANIMATION_SETTINGS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Contact Form Settings
export const CONTACT_FORM = {
  maxLength: {
    name: 100,
    email: 100,
    subject: 200,
    message: 1000,
  },
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// SEO
export const SEO = {
  title: "Ian Rosales - Senior Full Stack Developer",
  description:
    "Portfolio of Ian Rosales, a passionate full stack developer specializing in modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  author: "Ian Rosales",
  image: "/og-image.jpg",
} as const;
