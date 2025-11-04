// Fix: Import `ComponentType` from 'react' to resolve the namespace error.
import type { ComponentType } from 'react';

// The SkillCategory enum is removed and replaced with a more flexible interface
// to allow adding/editing categories in the admin panel.

export interface Skill {
  name: string;
  icon: string; // Will now store a base64 data URL for uploaded images
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  imageUrl: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  fullDescription: string;
}

export interface LearningItem {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  // liveUrl has been removed as per the user request.
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
