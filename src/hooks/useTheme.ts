"use client";

import { useState, useEffect } from "react";
import { Theme } from "@/types";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    const applyTheme = (newTheme: Theme) => {
      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.toggle("dark", systemTheme === "dark");
      } else {
        root.classList.toggle("dark", newTheme === "dark");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const toggleTheme = () => {
    if (theme === "system") {
      // Si está en system, cambiar al opuesto del sistema
      const systemTheme = getSystemTheme();
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      // Si está en light o dark, cambiar a system
      setTheme("system");
    }
  };

  const getThemeLabel = () => {
    if (theme === "system") {
      return "system";
    }
    const systemTheme = mounted ? getSystemTheme() : "light";
    return theme === systemTheme ? "system" : theme;
  };

  return { theme, toggleTheme, mounted, getThemeLabel, getSystemTheme };
}
