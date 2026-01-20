"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/constants";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center space-y-12 sm:space-y-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              LET'S CREATE
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              SOMETHING
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              AMAZING!
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ready to bring your ideas to life? I'm available for freelance
              projects, full-time opportunities, and exciting collaborations.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center group text-xl font-black px-12 py-8 bg-[rgb(28,28,30)] text-white hover:bg-gray-800 transition-colors"
            >
              START A PROJECT
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 space-y-6"
          >
            <div className="text-sm font-bold tracking-wide text-muted-foreground">
              OR REACH OUT DIRECTLY
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-lg font-bold hover:text-muted-foreground transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {PERSONAL_INFO.email.toUpperCase()}
              </a>

              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold hover:text-muted-foreground transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LINKEDIN
                </a>

                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold hover:text-muted-foreground transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  GITHUB
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-12"
          >
            <div className="text-sm font-medium tracking-wide text-muted-foreground">
              {PERSONAL_INFO.location.toUpperCase()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
