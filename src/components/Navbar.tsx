import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SmoothLinkProps {
    page: string;
    selectedPage: string;
    setSelectedPage: (page: string) => void;
    isAboveSmallScreen: boolean;
    isTopOfPage: boolean;
}

const SmoothLink = ({ page, selectedPage, setSelectedPage, isAboveSmallScreen }: SmoothLinkProps) => {
    const defaultSize = isAboveSmallScreen ? 'text-base' : 'text-2xl hover:text-yellow';
    const lowerCasePage = page.toLowerCase();

    if (lowerCasePage === "resume") return (
        <Link to="/resume" className={`relative inline-block cursor-pointer ${selectedPage === lowerCasePage ? 'text-red-500' : ''}
        transition duration-500 ${defaultSize} group`}>
            <div className="max-w-md">
                {page}
                {isAboveSmallScreen && <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>}
            </div>
        </Link>
    );

    return (
        <AnchorLink
            className={`relative inline-block cursor-pointer ${selectedPage === lowerCasePage ? 'text-red-500' : ''}
            transition duration-500 ${defaultSize} group`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            <div className="max-w-md">
                {page}
                {isAboveSmallScreen && <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>}
            </div>
        </AnchorLink>
    );
}

interface NavbarProps {
    isTopOfPage: boolean;
    selectedPage: string;
    setSelectedPage: (page: string) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: NavbarProps) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? 'shadow-none' : 'bg-white/95 md:bg-white/90 md:backdrop-blur-md shadow-sm border-b border-gray-100';

    const handleLinkClick = (page: string) => {
        setSelectedPage(page);
        setIsMenuToggled(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Escape') setIsMenuToggled(false);
    }

    return (
        <nav className={`${navbarBackground} transition-[background-color,box-shadow,border-color] duration-200 z-40 w-full fixed top-0 py-3 md:py-6`} onKeyDown={handleKeyDown}>
            <div className="flex items-center justify-between mx-auto px-4 md:px-16">
                <h4
                    className="font-playfair text-lg md:text-3xl font-bold flex-1 min-w-0 truncate mr-4 cursor-pointer"
                    onClick={() => setSelectedPage('home')}
                >
                    Baktiyar Assylzhan
                </h4>
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <SmoothLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                        <SmoothLink page="Resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                        <SmoothLink page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                        <SmoothLink page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                        <SmoothLink page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                        <SmoothLink page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                    </div>
                ) : (
                    <div className="shrink-0">
                        <button
                            className='rounded-full bg-red-500 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            aria-label="Open navigation menu"
                            aria-expanded={isMenuToggled}
                        >
                            <img alt="" className="brightness-0" src={require("../assets/menu-icon.svg").default} />
                        </button>

                        {isMenuToggled && (
                            <motion.div
                                initial={{ opacity: 0, y: -1000 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="fixed top-0 left-0 w-full h-full bg-black text-white p-4 overflow-y-auto z-50"
                            >
                                <div className='flex flex-col gap-4 mx-auto mt-50 justify-center h-full bg-black'>
                                    <SmoothLink page="Home" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('home')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                    <SmoothLink page="About" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('about')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                    <SmoothLink page="Resume" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('resume')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                    <SmoothLink page="Skills" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('skills')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                    <SmoothLink page="Projects" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('projects')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                    <SmoothLink page="Contact" selectedPage={selectedPage} setSelectedPage={() => handleLinkClick('contact')} isAboveSmallScreen={isAboveSmallScreen} isTopOfPage={isTopOfPage} />
                                </div>
                                <button
                                    className='absolute right-16 top-10 rounded-full bg-red-500 p-2'
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                    aria-label="Close navigation menu"
                                >
                                    <img alt="" src={require("../assets/close-icon.svg").default} />
                                </button>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
