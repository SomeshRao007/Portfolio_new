import React, { useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import LearningList from './components/LearningList';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import { INITIAL_DATA, createChatbotSystemInstruction } from './constants';

const App: React.FC = () => {
  const portfolioData = INITIAL_DATA;

  const chatbotInstruction = useMemo(() => createChatbotSystemInstruction(portfolioData), [portfolioData]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header name={portfolioData.personalInfo.name} />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
        <div id="home" className="pt-20 -mt-20">
          <Hero data={portfolioData.personalInfo} />
        </div>
        <Stats data={portfolioData.stats} />
        <div id="skills" className="pt-20 -mt-20">
          <Skills data={portfolioData.skills} />
        </div>
        <div id="timeline" className="pt-20 -mt-20">
          <Timeline data={portfolioData.timeline} />
        </div>
        <div id="projects" className="pt-20 -mt-20">
          <Projects data={portfolioData.projects} />
        </div>
        <div id="certifications" className="pt-20 -mt-20">
          <Certifications data={portfolioData.certifications} />
        </div>
        <div id="testimonials" className="pt-20 -mt-20">
          <Testimonials data={portfolioData.testimonials} />
        </div>
        <div id="learning" className="pt-20 -mt-20">
          <LearningList data={portfolioData.learning} />
        </div>
        <div id="contact" className="pt-20 -mt-20">
          <Contact formspreeEndpoint={portfolioData.personalInfo.formspreeEndpoint} />
        </div>
      </main>
      <Footer name={portfolioData.personalInfo.name} />
      <Chatbot systemInstruction={chatbotInstruction} />
    </div>
  );
};

export default App;
