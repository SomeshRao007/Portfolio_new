import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
        <div id="home" className="pt-20 -mt-20">
          <Hero />
        </div>
        <Stats />
        <div id="skills" className="pt-20 -mt-20">
          <Skills />
        </div>
        <div id="timeline" className="pt-20 -mt-20">
          <Timeline />
        </div>
        <div id="projects" className="pt-20 -mt-20">
          <Projects />
        </div>
        <div id="certifications" className="pt-20 -mt-20">
          <Certifications />
        </div>
        <div id="testimonials" className="pt-20 -mt-20">
          <Testimonials />
        </div>
        <div id="learning" className="pt-20 -mt-20">
          <LearningList />
        </div>
        <div id="contact" className="pt-20 -mt-20">
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;