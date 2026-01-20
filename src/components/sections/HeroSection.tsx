"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/constants";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 relative"
    >
      <div className="w-full">
        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base font-medium tracking-wide"
          >
            {PERSONAL_INFO.location.toUpperCase()}
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-none">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-muted-foreground">
                |
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                {PERSONAL_INFO.title.toUpperCase()}
              </h2>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {PERSONAL_INFO.bio}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {PERSONAL_INFO.tagline}
            </h3>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <Button
              size="lg"
              className="group text-lg font-bold px-8 py-6 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              LET'S WORK TOGETHER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <button
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
