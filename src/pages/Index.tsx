import { useState, useCallback } from 'react';
import BootSequence from '../components/BootSequence';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CommunityLog from '../components/CommunityLog';
import Contact from '../components/Contact';
import StatusBar from '../components/StatusBar';

const Index = () => {
  const [bootDone, setBootDone] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBootDone(true);
  }, []);

  return (
    <>
      {/* Boot sequence overlay — runs once per session */}
      <BootSequence onComplete={handleBootComplete} />

      {/* Scanline / grain atmosphere overlay */}
      <div className="atmosphere"></div>

      {/* Shell scaffold — sidebar + editor */}
      <div className="shell">
        <Navbar />

        <div className="editor">
          <main>
            <Hero bootDone={bootDone} />
            <Projects />
            <Skills />
            <CommunityLog />
            <Contact />
          </main>
        </div>
      </div>

      {/* Fixed status bar */}
      <StatusBar />
    </>
  );
};

export default Index;
