"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { CursorTrail } from "@/components/cursor-trail";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <CursorTrail />
      <Navbar />
      <ScrollIndicator />
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}