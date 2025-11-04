import React from 'react';
import type { Project } from '../types';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

type ProjectsProps = {
  data: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-24 bg-white rounded-2xl shadow-sm">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">My Projects</h2>
        <p className="mt-4 text-lg text-slate-600">A selection of projects I've built.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <div key={project.title} className="group flex flex-col bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-slate-600 flex-grow text-sm">{project.description}</p>
              <div className="mt-6 flex items-center space-x-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-full hover:bg-slate-300 transition-colors text-sm">
                  <CodeBracketIcon className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
