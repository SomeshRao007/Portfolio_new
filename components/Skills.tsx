import React, { useState } from 'react';
import { SKILLS_DATA } from '../constants';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SkillCategory.CLOUD);

  const categories = Object.values(SkillCategory);
  const filteredSkills = SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 md:py-24 bg-slate-100/50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <p className="text-sm text-blue-600 font-semibold">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Always ready to try hands-on new and emerging technologies</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-lg shadow-sm transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white scale-105 shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <skill.icon className="h-10 w-10 md:h-12 md:w-12 mb-4 text-slate-700" />
              <span className="font-semibold text-sm md:text-base text-slate-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;