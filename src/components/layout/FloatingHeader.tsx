"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useScrollspy } from "@/hooks/useScrollspy";
import { NAVIGATION, PERSONAL_INFO } from "@/constants";
import {
  Sun,
  Moon,
  Monitor,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, getSystemTheme, mounted } = useTheme();
  const activeSection = useScrollspy(NAVIGATION.map((item) => item.id));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />;

    const systemTheme = getSystemTheme();

    if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    } else {
      if (systemTheme === "dark") {
        return <Sun className="h-4 w-4" />;
      } else {
        return <Moon className="h-4 w-4" />;
      }
    }
  };

  const currentTime = new Date().toLocaleTimeString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {/* Menu Button */}
      <div className="absolute top-6 right-6 z-[60]">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 flex items-center justify-center hover:bg-background/20 transition-all duration-200 hover:rotate-90"
          aria-label="Toggle menu"
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full"></div>
          </div>
        </button>
      </div>

      {/* Header Module */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[rgb(28,28,30)]/20 z-[70]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Modern Header Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: -50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -50,
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                duration: 0.4,
              }}
              className="fixed top-6 right-6 z-[75] w-96"
            >
              <div className="bg-background/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden">
                {/* Header Section */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold tracking-tight">
                        {PERSONAL_INFO.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {PERSONAL_INFO.title}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Location & Time */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>Argentina</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{currentTime} ART</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Section */}
                <div className="p-6 border-b border-border/50">
                  <div className="grid grid-cols-2 gap-3">
                    {NAVIGATION.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "p-3 text-sm font-medium transition-all hover:bg-muted",
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Social Links */}
                    <div className="flex items-center space-x-3">
                      <a
                        href={PERSONAL_INFO.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={PERSONAL_INFO.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Theme Toggle */}
                    <button
                      onClick={toggleTheme}
                      className="p-2 hover:bg-muted transition-colors"
                      aria-label="Toggle theme"
                    >
                      {getThemeIcon()}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
