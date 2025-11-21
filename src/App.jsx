import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Visuals from './components/Visuals';
import Projects from './components/Projects';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Prevent hash navigation on reload
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Visuals />
      <Projects />
      <Marquee />
      <Contact />
    </div>
  );
}

export default App;
