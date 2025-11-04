import React from 'react';
import type { Testimonial } from '../types';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

type TestimonialsProps = {
  data: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-24 bg-slate-100/50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-semibold">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Others Say</h2>
          <p className="mt-4 text-lg text-slate-600">Feedback from people I've worked with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-slate-600 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-800">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
