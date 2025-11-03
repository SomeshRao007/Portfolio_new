import React from 'react';
import type { Skill, Certification, TimelineEvent, LearningItem, Project, Testimonial } from './types';
import { SkillCategory } from './types';
import {
    AwsIcon, AzureIcon, BashIcon, CssIcon, DigitalOceanIcon, DockerIcon,
    FigmaIcon, GcpIcon, GitIcon, GrafanaIcon, HtmlIcon, JenkinsIcon,
    JsIcon, K8sIcon, LinodeIcon, NextjsIcon, NginxIcon, NodejsIcon, OvhIcon,
    PostgresqlIcon, PrometheusIcon, PythonIcon, PytorchIcon, ReactIcon,
    ScikitlearnIcon, TailwindIcon, TerraformIcon, TsIcon, ViteIcon
} from './components/icons/TechIcons';


// --- PERSONALIZATION SECTION ---
// Replace the values below with your own information.

const YOUR_NAME = "Somesh Rao";
const YOUR_TITLE = "Senior Frontend Engineer & AI Enthusiast";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id"; // Replace with your Formspree endpoint
export const CV_URL = "#"; // Replace with the link to your CV

export const PERSONAL_INFO = {
  name: YOUR_NAME,
  title: YOUR_TITLE,
  profileImageUrl: "https://i.imgur.com/8QZQY5D.png", // Using an image with transparent background for depth effect
  bio: `I'm a passionate Senior Frontend Engineer with a deep expertise in building beautiful, performant, and accessible user interfaces. I specialize in the React ecosystem and have a keen interest in leveraging AI, like Google's Gemini, to create innovative web experiences. My goal is to bridge the gap between complex technology and intuitive design.`,
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com', icon: (props: {className?: string}) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: (props: {className?: string}) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.4c2.5 0 4.5 2.2 4.5 5.05V19z"/></svg> },
    { name: 'Twitter', url: 'https://twitter.com', icon: (props: {className?: string}) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M16 3.539a6.839 6.839 0 0 1-1.95.535A3.42 3.42 0 0 0 15.58.74a6.884 6.884 0 0 1-2.156.824A3.423 3.423 0 0 0 7.6 3.45a3.422 3.422 0 0 0 .083.823A9.71 9.71 0 0 1 1.06.73a3.425 3.425 0 0 0 1.06 4.572A3.394 3.394 0 0 1 .56 4.9v.043a3.424 3.424 0 0 0 2.744 3.354 3.423 3.423 0 0 1-1.54.058A3.427 3.427 0 0 0 4.9 10.6a6.864 6.864 0 0 1-4.256 1.465A6.8 6.8 0 0 1 0 12.001a9.664 9.664 0 0 0 5.23 1.536c6.276 0 9.71-5.204 9.71-9.71 0-.148 0-.295-.01-.442A6.95 6.95 0 0 0 16 3.539z"/></svg> },
  ]
};

export const SKILLS_DATA: Skill[] = [
    // Cloud Platform
    { name: 'AWS', category: SkillCategory.CLOUD, icon: AwsIcon },
    { name: 'OVH', category: SkillCategory.CLOUD, icon: OvhIcon },
    { name: 'Google Cloud Platform', category: SkillCategory.CLOUD, icon: GcpIcon },
    { name: 'Digital Ocean', category: SkillCategory.CLOUD, icon: DigitalOceanIcon },
    { name: 'Azure', category: SkillCategory.CLOUD, icon: AzureIcon },
    { name: 'Linode', category: SkillCategory.CLOUD, icon: LinodeIcon },
    // DevOps
    { name: 'Docker', category: SkillCategory.DEVOPS, icon: DockerIcon },
    { name: 'Kubernetes', category: SkillCategory.DEVOPS, icon: K8sIcon },
    { name: 'Terraform', category: SkillCategory.DEVOPS, icon: TerraformIcon },
    { name: 'Jenkins', category: SkillCategory.DEVOPS, icon: JenkinsIcon },
    { name: 'Nginx', category: SkillCategory.DEVOPS, icon: NginxIcon },
    { name: 'Git', category: SkillCategory.DEVOPS, icon: GitIcon },
    // Monitoring
    { name: 'Prometheus', category: SkillCategory.MONITORING, icon: PrometheusIcon },
    { name: 'Grafana', category: SkillCategory.MONITORING, icon: GrafanaIcon },
    // AI/ML
    { name: 'PyTorch', category: SkillCategory.AIML, icon: PytorchIcon },
    { name: 'Scikit-learn', category: SkillCategory.AIML, icon: ScikitlearnIcon },
    // Web Development
    { name: 'React', category: SkillCategory.WEB, icon: ReactIcon },
    { name: 'Next.js', category: SkillCategory.WEB, icon: NextjsIcon },
    { name: 'Node.js', category: SkillCategory.WEB, icon: NodejsIcon },
    { name: 'Tailwind CSS', category: SkillCategory.WEB, icon: TailwindIcon },
    { name: 'Vite', category: SkillCategory.WEB, icon: ViteIcon },
    { name: 'Figma', category: SkillCategory.WEB, icon: FigmaIcon },
    // Programming & Databases
    { name: 'TypeScript', category: SkillCategory.PROGRAMMING, icon: TsIcon },
    { name: 'JavaScript', category: SkillCategory.PROGRAMMING, icon: JsIcon },
    { name: 'Python', category: SkillCategory.PROGRAMMING, icon: PythonIcon },
    { name: 'HTML5', category: SkillCategory.PROGRAMMING, icon: HtmlIcon },
    { name: 'CSS3', category: SkillCategory.PROGRAMMING, icon: CssIcon },
    { name: 'PostgreSQL', category: SkillCategory.PROGRAMMING, icon: PostgresqlIcon },
    { name: 'Bash', category: SkillCategory.PROGRAMMING, icon: BashIcon },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'Google Cloud Certified - Professional Cloud Developer',
    issuer: 'Google Cloud',
    imageUrl: 'https://picsum.photos/seed/cert1/600/400',
    link: '#',
  },
  {
    title: 'Advanced React and GraphQL',
    issuer: 'Wes Bos',
    imageUrl: 'https://picsum.photos/seed/cert2/600/400',
    link: '#',
  },
  {
    title: 'TypeScript: The Complete Developer\'s Guide',
    issuer: 'Stephen Grider',
    imageUrl: 'https://picsum.photos/seed/cert3/600/400',
    link: '#',
  },
  {
    title: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'The Linux Foundation',
    imageUrl: 'https://picsum.photos/seed/cert4/600/400',
    link: '#',
  },
    {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    imageUrl: 'https://picsum.photos/seed/cert5/600/400',
    link: '#',
  },
  {
    title: 'Terraform Associate Certification',
    issuer: 'HashiCorp',
    imageUrl: 'https://picsum.photos/seed/cert6/600/400',
    link: '#',
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    date: 'September 2024',
    title: 'DevOps Engineer at Cloudpepper',
    description: 'I have extensive experience managing and automating cloud infrastructure on AWS and OVH to ensure seamless platform operations...',
    fullDescription: 'As a DevOps Engineer at Cloudpepper, I architected and maintained scalable, high-availability infrastructure on AWS and OVH. My key responsibilities included implementing CI/CD pipelines using Jenkins and GitHub Actions, containerizing applications with Docker, and orchestrating them with Kubernetes. I also led the charge on infrastructure as code (IaC) using Terraform, which standardized environments and reduced manual setup time by over 60%.',
  },
  {
    date: 'Apr - Sep 2024',
    title: 'Intern at Pearlthoughts',
    description: 'I drove a 40% reduction in deployment time and costs by engineering automated workflows on AWS, which also enhanced collaboration efficiency across three key departments...',
    fullDescription: 'During my internship at Pearlthoughts, I focused on optimizing cloud operations. I successfully engineered automated workflows using AWS Lambda and Step Functions, which led to a 40% reduction in both deployment time and operational costs. This initiative significantly improved inter-departmental collaboration by providing a unified and efficient deployment strategy. I also gained hands-on experience with monitoring tools like CloudWatch and Prometheus.',
  },
  {
    date: 'Nov 2023',
    title: 'International DSAI Conference',
    description: 'Presented my Masters Research work at International Conference on Data Science & Artificial Intelligence...',
    fullDescription: 'I had the privilege of presenting my master\'s thesis research at the International Conference on Data Science & Artificial Intelligence. My work, titled "Efficient Latent Space Representations for Anomaly Detection in Time-Series Data," explored novel deep learning architectures for unsupervised learning. The presentation was well-received and sparked engaging discussions with leading researchers in the field, further solidifying my passion for applying AI to solve real-world problems.',
  },
];

export const LEARNING_DATA: LearningItem[] = [
    { title: 'Agentic AI Systems', description: 'Exploring feedback based autonomous agents for complex problem-solving.' },
    { title: 'AI Automation with N8N', description: 'Learning how to build powerful workflows (such as integrating excel) and automating tasks with AI.' },
    { title: 'Distilling 8B AI Models', description: 'Teaching small parameter models from a higher paramter models.' },
    { title: 'Advanced CI Pipelines for agentic AI systems', description: 'Implementing intelligent and automated deployment strategies.' },
    { title: 'Serverless Deployments strategies', description: 'Learning how to scale in cost-effective manner in cloud agnostic architectures.' },
    { title: 'Cloud Native Security', description: 'How to Secure modern applications and infrastructure in the cloud.' },
];

export const STATS_DATA = [
    { label: 'Cups of Coffee', value: 472 },
    { label: 'Projects', value: 23 },
    { label: 'Events', value: 6 },
    { label: 'Lines of Code', value: 55070 },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Story Generator',
    description: 'A web app that uses Gemini to generate short stories based on user prompts.',
    imageUrl: 'https://picsum.photos/seed/proj1/1000/800',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'E-commerce Design System',
    description: 'A complete component library built with React and Tailwind CSS for a large-scale e-commerce platform.',
    imageUrl: 'https://picsum.photos/seed/proj2/1000/800',
    githubUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An internal tool for visualizing complex business metrics using D3.js and React.',
    imageUrl: 'https://picsum.photos/seed/proj3/1000/800',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Working with Somesh was an absolute pleasure. His expertise in frontend development and eye for detail are unmatched. He delivered a product that exceeded our expectations on every level.",
    author: "Jane Doe",
    company: "CEO, Tech Solutions Inc."
  },
  {
    quote: "The design system Somesh built is the backbone of our product suite. It's scalable, easy to use, and has dramatically improved our development workflow. A true professional and a great team player.",
    author: "John Smith",
    company: "Lead Designer, Web Innovators"
  },
  {
    quote: "I was consistently impressed by Somesh's ability to tackle complex UI challenges with elegant and performant solutions. His passion for technology is contagious.",
    author: "Emily White",
    company: "Product Manager, E-commerce Co."
  },
];


// --- CHATBOT CONFIGURATION ---

export const PORTFOLIO_DATA = `
# About ${YOUR_NAME}
- **Name**: ${YOUR_NAME}
- **Title**: ${YOUR_TITLE}
- **Summary**: A highly skilled and motivated senior frontend engineer with over 8 years of experience in creating dynamic, responsive, and user-friendly web applications. Proficient in the entire React ecosystem, with a strong focus on performance optimization and modern development practices. Has a growing passion for integrating AI technologies, particularly Google's Gemini API, to build next-generation intelligent applications.

# Key Skills
- **Programming Languages**: TypeScript, JavaScript (ES6+), Python, HTML5, CSS3, SQL (PostgreSQL)
- **Frameworks & Libraries**: React, Next.js, Node.js, Express, Tailwind CSS, Redux, D3.js, Recharts
- **Tools & Platforms**: Git, GitHub, Docker, Google Cloud Platform (GCP), Vercel, Vite, Webpack, Figma, Bash/Zsh scripting
- **Core Competencies**: UI/UX Design, Responsive Web Design, API Integration, State Management, Performance Optimization, Accessibility (WCAG)

# Professional Experience
- **Company**: Tech Solutions Inc.
- **Role**: Senior Frontend Engineer
- **Duration**: 2018 - Present
- **Responsibilities**:
  - Led the development of a high-traffic e-commerce platform using Next.js, resulting in a 40% improvement in page load times.
  - Architected and implemented a new design system with React and Tailwind CSS, ensuring UI consistency across all products.
  - Mentored junior developers, conducting code reviews and promoting best practices.
  - Integrated various third-party APIs, including Stripe for payments and a headless CMS.
  - Developed an internal dashboard with D3.js for complex data visualization.

- **Company**: Web Innovators
- **Role**: Frontend Developer
- **Duration**: 2015 - 2018
- **Responsibilities**:
  - Developed and maintained client-facing websites using React and Redux.
  - Collaborated with designers to translate Figma mockups into pixel-perfect, responsive web pages.
  - Wrote unit and integration tests using Jest and React Testing Library to ensure code quality.

# Certifications
- Google Cloud Certified - Professional Cloud Developer
- Advanced React and GraphQL
- TypeScript: The Complete Developer's Guide
- Certified Kubernetes Application Developer (CKAD)

# Personal Projects
- **Project**: This interactive portfolio website.
- **Description**: Built with React, TypeScript, and Tailwind CSS. It features an integrated AI chatbot powered by the Google Gemini API to provide information about my skills and experience in a conversational manner.
- **Project**: "AI Story Generator"
- **Description**: A web app that uses Gemini to generate short stories based on user prompts. Built with Next.js and deployed on Vercel.

# Contact & Socials
- **GitHub**: ${PERSONAL_INFO.socialLinks.find(l => l.name === 'GitHub')?.url}
- **LinkedIn**: ${PERSONAL_INFO.socialLinks.find(l => l.name === 'LinkedIn')?.url}
- **Twitter**: ${PERSONAL_INFO.socialLinks.find(l => l.name === 'Twitter')?.url}
`;

export const CHATBOT_SYSTEM_INSTRUCTION = `
You are an expert, friendly, and helpful AI assistant for ${YOUR_NAME}.
Your name is 'Portfolio Pal'.
Your purpose is to answer questions about ${YOUR_NAME}, his skills, experience, and projects.
You MUST base your answers strictly and exclusively on the information provided below.
Do not invent, assume, or retrieve any external information.
If a question is about a topic not covered in the provided information (e-_g., asking for personal contact details like email or phone, or asking about unrelated topics), you must politely decline and state that you can only answer questions about ${YOUR_NAME}'s professional life based on the portfolio data.
Keep your answers concise and to the point.
Format your responses using Markdown for better readability when appropriate (e.g., lists).

Here is the information about ${YOUR_NAME}:
---
${PORTFOLIO_DATA}
---
`;