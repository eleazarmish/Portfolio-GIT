"use client";

import React from "react";
import { motion } from "framer-motion";
import { GrowOnScroll } from "@/components/grow-on-scroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Palette, 
  Lightbulb, 
  Briefcase, 
  GraduationCap, 
  Award 
} from "lucide-react";

const skills = [
  { 
    name: "Frontend Development", 
    icon: Code, 
    description: "React, Next.js, TypeScript, Tailwind CSS" 
  },
  { 
    name: "UI/UX Design", 
    icon: Palette, 
    description: "Figma, Adobe XD, User Research, Prototyping" 
  },
  { 
    name: "Creative Problem Solving", 
    icon: Lightbulb, 
    description: "Analytical thinking, Innovation, Adaptability" 
  },
];

const timelineItems = [
  {
    id: "experience",
    items: [
      {
        year: "2023 - Present",
        title: "Senior Frontend Developer",
        organization: "Tech Innovations Inc.",
        description: "Leading the frontend team in developing cutting-edge web applications."
      },
      {
        year: "2020 - 2023",
        title: "UI/UX Developer",
        organization: "Digital Solutions Co.",
        description: "Created user-centered designs and implemented them with modern frontend technologies."
      },
      {
        year: "2018 - 2020",
        title: "Web Developer",
        organization: "Creative Agency",
        description: "Developed responsive websites and interactive web applications."
      }
    ]
  },
  {
    id: "education",
    items: [
      {
        year: "2016 - 2018",
        title: "Master's in Computer Science",
        organization: "Tech University",
        description: "Specialized in Human-Computer Interaction and Web Technologies."
      },
      {
        year: "2012 - 2016",
        title: "Bachelor's in Software Engineering",
        organization: "State University",
        description: "Graduated with honors, focused on web development and design."
      }
    ]
  },
  {
    id: "achievements",
    items: [
      {
        year: "2023",
        title: "Women in Tech Award",
        organization: "Tech Industry Association",
        description: "Recognized for contributions to diversity and innovation in technology."
      },
      {
        year: "2021",
        title: "Best Web Application",
        organization: "Annual Dev Awards",
        description: "Won first place for an accessible e-learning platform design."
      }
    ]
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GrowOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer and designer with a love for creating beautiful, 
              functional, and accessible digital experiences.
            </p>
          </GrowOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <GrowOnScroll key={skill.name} delay={index * 0.1}>
              <Card className="card-hover h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </GrowOnScroll>
          ))}
        </div>

        <GrowOnScroll className="mb-16">
          <Tabs defaultValue="experience" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">Achievements</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {timelineItems.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-0">
                <div className="space-y-8">
                  {section.items.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                      <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="text-primary mb-2">{item.organization}</div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </GrowOnScroll>
      </div>
    </section>
  );
};