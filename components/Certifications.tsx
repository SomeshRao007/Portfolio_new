import React from 'react';
import type { Certification } from '../types';

type CertificationsProps = {
  data: Certification[];
};

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">Licenses & Certifications</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">My commitment to continuous learning and professional development.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((cert) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-slate-700 transition-shadow duration-300 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;