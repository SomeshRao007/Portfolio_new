import React from 'react';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import LearningList from './components/LearningList';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
