import React, { useState, useMemo } from 'react';
import type { TimelineEvent } from '../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

type TimelineProps = {
  data: TimelineEvent[];
};

const TimelineModal: React.FC<{ event: TimelineEvent; onClose: () => void }> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div>
          <p className="text-blue-500 font-semibold mb-2">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">{event.title}</h3>
          <p className="text-slate-600 leading-relaxed">{event.fullDescription}</p>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [data]);

  const handleReadMore = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="text-center mb-16">
        <p className="text-sm text-blue-600 font-semibold">Timeline</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">My journey so far</h2>
        <p className="mt-4 text-lg text-slate-600">All my academic and professional experience with some milestones achieved are summed up here.</p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-blue-200 -translate-x-1/2"></div>

        <div className="space-y-12">
          {sortedData.map((event, index) => (
            <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-12 items-center group">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-1 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              
              {/* Content */}
              <div className={`md:col-start-1 md:row-start-1 ${index % 2 === 0 ? 'md:col-start-2' : 'md:text-right'}`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <p className="text-blue-500 font-semibold mb-1">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                  <button onClick={() => handleReadMore(event)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && selectedEvent && <TimelineModal event={selectedEvent} onClose={handleCloseModal} />}
    </section>
  );
};

export default Timeline;
