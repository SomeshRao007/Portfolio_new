import React from 'react';
import { ArrowDownTrayIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

type HeroProps = {
  data: {
    name: string;
    title: string;
    profileImageUrl: string;
    bio: string;
    socialLinks: { name: string; url: string; icon: string }[];
    cvUrl: string;
  };
};

const ExpandableButton: React.FC<{ href: string; icon: React.ReactNode; text: string; download?: boolean }> = ({ href, icon, text, download }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(download && { download: 'cv.pdf' })}
        className="group relative flex items-center justify-center h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        <div className="flex items-center justify-center w-12 h-12">
            {icon}
        </div>
        <div
            className="absolute left-1/2 flex items-center bg-blue-600 text-white text-sm font-semibold rounded-full whitespace-nowrap px-0 w-0 h-10 -translate-x-1/2 opacity-0 group-hover:px-6 group-hover:w-auto group-hover:opacity-100 group-focus:px-6 group-focus:w-auto group-focus:opacity-100 transition-all duration-300 ease-in-out"
        >
            <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 delay-150">{text}</span>
        </div>
    </a>
);


const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
        <div className="md:col-span-1 flex justify-center">
           <div className="relative w-56 h-56 md:w-72 md:h-72">
             <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-105" />
             <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <img
                    src={data.profileImageUrl}
                    alt={data.name}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[100%] max-w-none"
                  />
             </div>
           </div>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            {data.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-blue-600 font-semibold">
            {data.title}
          </p>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
            {data.bio}
          </p>
          <div className="mt-8 flex justify-center md:justify-start items-center space-x-6">
            {data.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="hover:opacity-75 transition-opacity"
              >
                <img src={link.icon} alt={link.name} className="w-8 h-8" />
              </a>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-lg font-telugu text-slate-700">మీరు పోరాడకపోతే, మీరు గెలవలేరు.</p>
              <p className="text-md text-slate-500 italic mt-1">"If you don't fight, you can't win."</p>
            </div>
            <div className="mt-8 md:mt-0 flex items-center space-x-4">
                <ExpandableButton
                  href={data.cvUrl}
                  icon={<ArrowDownTrayIcon className="w-6 h-6 text-blue-600" />}
                  text="Download CV"
                  download
                />
                <ExpandableButton
                  href="#testimonials"
                  icon={<ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />}
                  text="Testimonials"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
