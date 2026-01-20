"use client";

import { PERSONAL_INFO } from "@/constants";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-background py-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">
              © {currentYear} Ian Rosales. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with Next.js & TypeScript
            </p>
          </div>

          {/* Right - Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold hover:text-muted-foreground transition-colors group"
          >
            GO BACK TO TOP
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
