import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../constants';

const CountUp: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let frame = 0;
          const totalFrames = 120; // 2 seconds at 60fps
          const counter = setInterval(() => {
            frame++;
            const progress = easeOutExpo(frame / totalFrames);
            setCount(Math.round(end * progress));

            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, 16.67);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="my-20 md:my-24">
      <div className="relative bg-fixed bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center p-8 md:p-16">
          {STATS_DATA.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-4xl md:text-6xl font-bold">
                <CountUp end={stat.value} />
              </p>
              <p className="mt-2 text-md md:text-lg text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
