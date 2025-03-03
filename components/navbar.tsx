"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full transition-all duration-300",
        scrolled
          ? "glass-effect shadow-lg"
          : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center space-x-1 sm:space-x-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm transition-all duration-300",
                activeSection === item.href.substring(1)
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => scrollToSection(item.href)}
            >
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="hidden sm:inline-block mr-1">{item.name}</span>
              <Icon className="h-4 w-4" />
            </Button>
          );
        })}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.nav>
  );
}