"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui";
import { ExternalLink, Github } from "lucide-react";

export function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "E-COMMERCE PLATFORM",
      subtitle: "Full-stack web application for online retail",
      description:
        "A modern e-commerce solution built with Next.js, featuring user authentication, payment processing, and inventory management.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      image: "/projects/ecommerce.jpg",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/ianrosales/ecommerce",
    },
    {
      id: 2,
      title: "TASK MANAGEMENT APP",
      subtitle: "Mobile and web app for productivity",
      description:
        "Cross-platform task management application with real-time collaboration, built with React Native and Node.js.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      image: "/projects/taskapp.jpg",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/ianrosales/taskapp",
    },
    {
      id: 3,
      title: "API GATEWAY",
      subtitle: "Microservices architecture solution",
      description:
        "Scalable API gateway built with Express.js and Redis, handling authentication, rate limiting, and request routing.",
      technologies: ["Node.js", "Express.js", "Redis", "Docker", "AWS"],
      image: "/projects/api.jpg",
      githubUrl: "https://github.com/ianrosales/api-gateway",
    },
  ];

  return (
    <section id="work" className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            SELECTED WORK
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Project Image Placeholder */}
              <div
                className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="aspect-video bg-secondary rounded-none overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl sm:text-6xl font-black text-muted-foreground/30">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`order-1 space-y-6 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-foreground"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold hover:text-muted-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE SITE
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold hover:text-muted-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 sm:mt-24"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6">
            WANT TO SEE MORE?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            These are just a few highlights. Check out my GitHub for more
            projects and contributions.
          </p>
          <a
            href="https://github.com/ianrosales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(28,28,30)] text-white font-bold hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            VIEW ALL PROJECTS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
