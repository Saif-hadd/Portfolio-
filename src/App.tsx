import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;