import React from 'react';
import type { LearningItem } from '../types';

type LearningListProps = {
  data: LearningItem[];
};

const LearningList: React.FC<LearningListProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-24">
      <div className="text-center mb-16">
        <p className="text-sm text-blue-600 font-semibold">What I'm Learning</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Learning List</h2>
        <p className="mt-4 text-lg text-slate-600">My current focus is on these exciting technologies.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.title}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 border-l-4 border-transparent hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningList;
