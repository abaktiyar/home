import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './components/Landing';
import LineGradient from './components/LineGradient';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Res from './components/Res';
import AboutMe from './components/AboutMe';



function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // NAVBAR COMPONENT
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* DOT GROUP COMPONENT */}
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
      {/* LANDING COMPONENT */}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Landing setSelectedPage={setSelectedPage} />
      </motion.div>
      {/* <LineGradient /> */}
      <div className='w-5/6 mx-auto md:h-full'></div>
      {/* About ME COMPONENT */}
      <div className="mx-auto h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutMe setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      {/* <LineGradient /> */}

      {/* SKILLS COMPONENT */}
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>

      <LineGradient />
      {/* PROJECTS COMPONENT */}
      {/* <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div> */}
      <LineGradient />
      {/* CARDS COMPONENT */}
      <div className="flex justify-center mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Res />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
