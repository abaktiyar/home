import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Navbar from './Navbar';
import DotGroup from './DotGroup';
import Landing from './Landing';
import LineGradient from './LineGradient';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Res from './Res';
import AboutMe from './AboutMe';
import BackToTop from './BackToTop';

const Home = () => {
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
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />

            <div className="w-5/6 mx-auto md:h-full">
                {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
            </div>

            <motion.div
                viewport={{ margin: "0px 0px -200px 0px", amount: "all" }}
                onViewportEnter={() => setSelectedPage("home")}
            >
                <div className="md:h-[100vh]">
                    <Landing setSelectedPage={setSelectedPage} />
                </div>
            </motion.div>

            <LineGradient />
            <div className='w-5/6 mx-auto md:h-full'></div>

            <div className="mx-auto h-full">
                <motion.div
                    viewport={{ margin: "0px 0px -200px 0px", amount: "all" }}
                    onViewportEnter={() => setSelectedPage("about")}
                >
                    <AboutMe setSelectedPage={setSelectedPage} />
                </motion.div>
            </div>

            <LineGradient />

            <motion.div
                viewport={{ margin: "0px 0px -200px 0px", amount: "all" }}
                onViewportEnter={() => setSelectedPage("skills")}
            >
                <Skills />
            </motion.div>

            <LineGradient />

            <div className="w-5/6 mx-auto md:h-full py-5">
                <p className='text-4xl font-bold inline border-red-500 border-b-4'>Projects</p>
            </div>
            <div className="flex justify-center md:h-full">
                <motion.div
                    viewport={{ margin: "0px 0px -200px 0px", amount: "all" }}
                    onViewportEnter={() => setSelectedPage("projects")}
                >
                    <Res />
                </motion.div>
            </div>

            <div className="w-full mx-auto md:h-full bg-black">
                <motion.div
                    viewport={{ margin: "0px 0px -200px 0px", amount: "all" }}
                    onViewportEnter={() => setSelectedPage("contact")}
                >
                    <Contact />
                </motion.div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Home;
