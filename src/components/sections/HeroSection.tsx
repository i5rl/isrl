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
      className="min-h-screen flex flex-col justify-center px-6 py-20 relative w-full"
    >
      {/* Location - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 left-8 text-sm sm:text-base font-medium tracking-wide"
      >
        {PERSONAL_INFO.location.toUpperCase()}
      </motion.div>

      {/* Main Content - Centered */}
      <div className="text-center space-y-8 sm:space-y-12">
        {/* Main Tagline - Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl max-w-7xl mx-auto sm:text-6xl lg:text-8xl font-black tracking-tight leading-none text-gray-600 dark:text-foreground cursor-expand">
            {PERSONAL_INFO.tagline}
          </h1>
        </motion.div>

        {/* Bio - Shorter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.bio}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4"
        >
          <Button
            size="lg"
            className="group text-lg font-bold px-8 py-6 bg-[rgb(28,28,30)] text-white hover:bg-gray-800 transition-colors"
          >
            LET'S WORK TOGETHER
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Name & Title - Bottom Right as Signature */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 right-8 text-right"
      >
        <h2 className="text-lg sm:text-xl font-bold tracking-wide">
          {PERSONAL_INFO.name.toUpperCase()}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
          {PERSONAL_INFO.title.toUpperCase()}
        </p>
      </motion.div>

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
    </section>
  );
}
