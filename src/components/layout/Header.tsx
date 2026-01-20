"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useScrollspy } from "@/hooks/useScrollspy";
import { NAVIGATION } from "@/constants";
import { Button } from "@/components/ui";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

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
      // Cuando está en system, mostrar el icono system
      return <Monitor className="h-4 w-4" />;
    } else {
      // Cuando está en modo manual, mostrar la opción contraria al sistema
      if (systemTheme === "dark") {
        // Sistema oscuro -> mostrar opción de light
        return <Sun className="h-4 w-4" />;
      } else {
        // Sistema claro -> mostrar opción de dark
        return <Moon className="h-4 w-4" />;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center space-x-3"
        >
          <span className="font-black text-xl tracking-tight">IR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="container mx-auto px-4 py-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
