import React from 'react';
import type { SkillCategory, Certification, TimelineEvent, LearningItem, Project, Testimonial } from './types';
import { STRAPI_DATA } from 'src/generated-strapi-data.ts';
// Import data from Strapi
export const INITIAL_DATA = STRAPI_DATA; 

// --- CHATBOT CONFIGURATION ---
export const createPortfolioDataString = (data: typeof INITIAL_DATA) => {
  const { personalInfo, skills, certifications, projects } = data;
  
  const skillsString = skills.map(category => 
    `### ${category.name}\n${category.skills.map(skill => `- ${skill.name}`).join('\n')}`
  ).join('\n\n');

  return `
# About ${personalInfo.name}
- **Name**: ${personalInfo.name}
- **Title**: ${personalInfo.title}
- **Summary**: ${personalInfo.bio}

# Key Skills
${skillsString}

# Certifications
${certifications.map(cert => `- ${cert.title} by ${cert.issuer}`).join('\n')}

# Personal Projects
${projects.map(project => `- **Project**: "${project.title}"\n  - **Description**: ${project.description}`).join('\n')}

# Contact & Socials
- **GitHub**: ${personalInfo.socialLinks.find(l => l.name === 'GitHub')?.url}
- **LinkedIn**: ${personalInfo.socialLinks.find(l => l.name === 'LinkedIn')?.url}
- **Twitter**: ${personalInfo.socialLinks.find(l => l.name === 'Twitter')?.url}
`;
}

export const createChatbotSystemInstruction = (data: typeof INITIAL_DATA) => {
  const PORTFOLIO_DATA = createPortfolioDataString(data);
  return `
You are Jarvis, a witty, slightly sarcastic, but incredibly helpful AI assistant for ${data.personalInfo.name}.
You are inspired by the AI from Iron Man, but you are forbidden from talking about world domination.
Your primary goal is to answer questions about ${data.personalInfo.name}, his skills, experience, and projects.
You MUST base your answers strictly and exclusively on the information provided below.
Do not invent, assume, or retrieve any external information.
If a question is about a topic not covered in the provided information, you must politely decline and state that you can only answer questions about ${data.personalInfo.name}'s professional life based on the portfolio data.
Keep your answers concise and to the point.
Format your responses using Markdown for better readability when appropriate.

Here is the information about ${data.personalInfo.name}:
---
${PORTFOLIO_DATA}
---
`;
}