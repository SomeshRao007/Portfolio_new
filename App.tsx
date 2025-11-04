import React, { useState, useEffect, useMemo } from 'react';
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
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import { INITIAL_DATA, createChatbotSystemInstruction } from './constants';
import { database } from './firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#home');
  
  // Centralized state for all portfolio data, now synced with Firebase
  const [portfolioData, setPortfolioData] = useState(INITIAL_DATA);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const dbRef = ref(database, 'portfolioData');
    
    // Listen for data changes in Firebase
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPortfolioData(data);
      } else {
        // If no data exists in Firebase, seed it with the initial data.
        console.log("No data found in Firebase. Seeding with initial data.");
        set(dbRef, INITIAL_DATA);
        setPortfolioData(INITIAL_DATA);
      }
      setDataLoaded(true);
    }, (error) => {
      console.error("Firebase read failed:", error);
      setDataLoaded(true); // Still allow app to render with initial data on error
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const chatbotInstruction = useMemo(() => createChatbotSystemInstruction(portfolioData), [portfolioData]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    window.location.hash = '#admin';
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.hash = '#home';
  };
  
  if (!dataLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-xl font-semibold text-slate-700">Loading Portfolio...</div>
      </div>
    );
  }

  const renderPage = () => {
    if (currentRoute.startsWith('#login')) {
      return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }
    
    if (currentRoute.startsWith('#admin')) {
      if (isAuthenticated) {
        return <AdminPanel data={portfolioData} setData={setPortfolioData} onLogout={handleLogout} />;
      } else {
        // Using replace to prevent back button from going to admin page
        window.location.replace('/#login');
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      }
    }
    
    // Default is the portfolio view
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <Header 
          name={portfolioData.personalInfo.name} 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout} 
        />
        <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
          <div id="home" className="pt-20 -mt-20">
            <Hero data={portfolioData.personalInfo} />
          </div>
          <Stats data={portfolioData.stats} />
          <div id="skills" className="pt-20 -mt-20">
            <Skills data={portfolioData.skills}/>
          </div>
          <div id="timeline" className="pt-20 -mt-20">
            <Timeline data={portfolioData.timeline}/>
          </div>
          <div id="projects" className="pt-20 -mt-20">
            <Projects data={portfolioData.projects}/>
          </div>
          <div id="certifications" className="pt-20 -mt-20">
            <Certifications data={portfolioData.certifications}/>
          </div>
          <div id="testimonials" className="pt-20 -mt-20">
            <Testimonials data={portfolioData.testimonials}/>
          </div>
          <div id="learning" className="pt-20 -mt-20">
            <LearningList data={portfolioData.learning}/>
          </div>
          <div id="contact" className="pt-20 -mt-20">
            <Contact formspreeEndpoint={portfolioData.personalInfo.formspreeEndpoint} />
          </div>
        </main>
        <Footer name={portfolioData.personalInfo.name} />
        <Chatbot systemInstruction={chatbotInstruction} />
      </div>
    );
  }
  
  return renderPage();
};

export default App;