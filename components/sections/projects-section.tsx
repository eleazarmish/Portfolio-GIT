"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrowOnScroll } from "@/components/grow-on-scroll";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bloom - E-commerce Platform",
    description: "A modern e-commerce platform for a boutique flower shop with online ordering and delivery tracking.",
    image: "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    longDescription: "Bloom is a comprehensive e-commerce solution designed for a boutique flower shop. The platform features a stunning product catalog, secure checkout with Stripe integration, real-time delivery tracking, and a customer account system. The UI was designed with a focus on showcasing the beauty of the products while maintaining excellent performance and accessibility.",
    link: "#"
  },
  {
    id: 2,
    title: "Serenity - Meditation App",
    description: "A calming meditation app with guided sessions, progress tracking, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    tags: ["React Native", "TypeScript", "Firebase", "Audio API"],
    longDescription: "Serenity is a meditation app designed to help users find peace in their busy lives. It features a library of guided meditation sessions, ambient sounds, sleep stories, and breathing exercises. The app includes progress tracking, streak maintenance, and personalized recommendations based on user preferences and behavior. The UI was designed with soft, calming colors and smooth animations to enhance the meditation experience.",
    link: "#"
  },
  {
    id: 3,
    title: "Palette - Design System",
    description: "A comprehensive design system with components, guidelines, and documentation for consistent product development.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Storybook", "Figma", "Accessibility"],
    longDescription: "Palette is a design system created to ensure consistency across multiple products within an organization. It includes a library of reusable components, design tokens, accessibility guidelines, and comprehensive documentation. The system was built with a focus on flexibility, allowing teams to maintain brand consistency while adapting to specific product needs. The documentation site includes interactive examples, code snippets, and design principles.",
    link: "#"
  },
  {
    id: 4,
    title: "Harmony - Music Streaming",
    description: "A music streaming platform with personalized playlists, artist spotlights, and social sharing features.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Vue.js", "Node.js", "Web Audio API", "Socket.io"],
    longDescription: "Harmony is a music streaming platform that combines high-quality audio with social features. Users can create and share playlists, follow artists and friends, and discover new music through personalized recommendations. The platform includes artist spotlights, live listening sessions, and integration with social media. The UI was designed with a focus on showcasing album artwork and creating an immersive listening experience.",
    link: "#"
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GrowOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring web applications, design systems, and more.
            </p>
          </GrowOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GrowOnScroll key={project.id} delay={index * 0.1}>
              <Card 
                className="overflow-hidden card-hover cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </GrowOnScroll>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogHeader>
                <AspectRatio ratio={16 / 9} className="mt-4 overflow-hidden rounded-md">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <DialogDescription className="text-foreground">
                  {selectedProject.longDescription}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button className="flex items-center gap-2" asChild>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      Visit Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};