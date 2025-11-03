// Fix: Import `ComponentType` from 'react' to resolve the namespace error.
import type { ComponentType } from 'react';

export enum SkillCategory {
  CLOUD = 'Cloud Platform',
  DEVOPS = 'DevOps',
  MONITORING = 'Monitoring',
  AIML = 'AI/ML',
  WEB = 'Web Development',
  PROGRAMMING = 'Programming & Databases',
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: ComponentType<{ className?: string }>;
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
  liveUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}