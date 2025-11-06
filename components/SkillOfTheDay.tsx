import React, { useMemo } from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import type { SkillCategory, Skill } from '../types';

type SkillOfTheDayProps = {
  data: SkillCategory[];
};

const SkillOfTheDay: React.FC<SkillOfTheDayProps> = ({ data }) => {
  const skillOfTheDay = useMemo(() => {
    // 1. Flatten all skills into a single array
    const allSkills: Skill[] = data.flatMap(category => category.skills);
    
    if (allSkills.length === 0) {
      return null;
    }

    // 2. Create a deterministic seed based on the current date (UTC)
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth();
    const day = now.getUTCDate();
    const seed = year * 10000 + month * 100 + day;

    // 3. Use the seed to pick a pseudo-random index
    const index = seed % allSkills.length;
    
    return allSkills[index];
  }, [data]);

  if (!skillOfTheDay) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2">
            <SparklesIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">Skill of the Day</h2>
            <SparklesIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </div>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">A daily spotlight on one of my key technologies.</p>
        </div>
        
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center shadow-inner">
                {skillOfTheDay.icon ? (
                  <img src={skillOfTheDay.icon} alt={`${skillOfTheDay.name} icon`} className="h-14 w-14 object-contain" />
                ) : (
                  <div className="h-14 w-14 bg-slate-200 dark:bg-slate-600 rounded-full" />
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Today's Highlight</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1">{skillOfTheDay.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillOfTheDay;
