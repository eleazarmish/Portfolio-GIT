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
    title: "Kolaborate Tools",
    description: "Developed free tools (content template, image generator, resume/portfolio builder) to attract users and drive sign-ups.",
    technologies: ["JavaScript", "React", "APIs"],
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop",
    demo: "your-demo-link",
    github: "your-github-link"
  },
  {
    title: "Library Management System",
    description: "Designed and built a Library Management System to streamline book borrowing, returns, and inventory management.",
    technologies: ["JavaScript", "SQL", "Firebase"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop",
    demo: "your-demo-link",
    github: "your-github-link"
  },
  {
    title: "RideLink",
    description: "A ride-hailing app designed for efficiency and seamless user experience.",
    technologies: ["React", "API integration"],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop",
    demo: "your-demo-link",
    github: "your-github-link"
  },
  {
    title: "Smart Car Parking System",
    description: "Developed a magnetometer-based smart parking system with a Flutter-based app and an embedded system for real-time monitoring.",
    technologies: ["Flutter", "Embedded Systems", "IoT"],
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop",
    demo: "your-demo-link",
    github: "your-github-link"
  },
  {
    title: "Content Calendar",
    description: "A team-focused content scheduling tool for planning and managing digital content.",
    technologies: ["Next.js", "Convex", "Clerk"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    demo: "your-demo-link",
    github: "your-github-link"
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
            <GrowOnScroll key={project.title} delay={index * 0.1}>
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
                    {project.technologies.map((tag) => (
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
                  {selectedProject.description}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.technologies.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button className="flex items-center gap-2" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      View Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex justify-end mt-4">
                  <Button className="flex items-center gap-2" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub <ExternalLink className="h-4 w-4" />
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