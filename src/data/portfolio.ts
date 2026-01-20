import {
  Project,
  Experience,
  Skill,
  Education,
  Certification,
  ProjectCategory,
  ProjectStatus,
  SkillCategory,
  SkillLevel,
} from "@/types";

// Projects Data
export const projects: Project[] = [
  // Añade aquí tus proyectos
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern technologies",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and admin dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/tuusuario/ecommerce",
    liveUrl: "https://ecommerce.tusitio.com",
    featured: true,
    category: ProjectCategory.WEB_APPLICATION,
    status: ProjectStatus.COMPLETED,
    startDate: new Date("2023-01-15"),
    endDate: new Date("2023-06-30"),
  },
  // Más proyectos...
];

// Experience Data
export const experience: Experience[] = [
  // Añade tu experiencia laboral
  {
    id: "exp-1",
    company: "Tech Company",
    position: "Senior Full Stack Developer",
    description:
      "Led development of multiple web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    startDate: new Date("2022-01-15"),
    current: true,
    companyUrl: "https://techcompany.com",
    location: "Remote",
  },
  // Más experiencia...
];

// Skills Data
export const skills: Skill[] = [
  // Frontend
  {
    id: "skill-1",
    name: "React",
    category: SkillCategory.FRONTEND,
    level: SkillLevel.EXPERT,
    icon: "react",
    yearsOfExperience: 5,
  },
  {
    id: "skill-2",
    name: "Next.js",
    category: SkillCategory.FRONTEND,
    level: SkillLevel.ADVANCED,
    icon: "nextjs",
    yearsOfExperience: 3,
  },
  {
    id: "skill-3",
    name: "TypeScript",
    category: SkillCategory.FRONTEND,
    level: SkillLevel.EXPERT,
    icon: "typescript",
    yearsOfExperience: 4,
  },
  // Backend
  {
    id: "skill-4",
    name: "Node.js",
    category: SkillCategory.BACKEND,
    level: SkillLevel.ADVANCED,
    icon: "nodejs",
    yearsOfExperience: 4,
  },
  // Más skills...
];

// Education Data
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Universidad",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2022-05-31"),
    current: false,
    gpa: 3.8,
    description:
      "Focused on software engineering, algorithms, and data structures.",
  },
  // Más educación...
];

// Certifications Data
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    issueDate: new Date("2023-03-15"),
    expirationDate: new Date("2026-03-15"),
    credentialId: "AWS-CERT-123456",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  // Más certificaciones...
];
