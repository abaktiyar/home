import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const SmoothLink = ({ page, selectedPage, setSelectedPage, isAboveSmallScreen, isTopOfPage }) => {
    const defaultSize = isAboveSmallScreen ? 'text-lg' : 'text-2xl hover:text-yellow'
    const lowerCasePage = page.toLowerCase()
    if (lowerCasePage === "resume") return (
        <Link to="/resume" className={`relative inline-block cursor-pointer ${selectedPage === lowerCasePage ? 'text-yellow' : ''}
        transition duration-500 ${defaultSize} group`}>
            <div className="max-w-md">
                {page}
                {isAboveSmallScreen && <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 ${isTopOfPage ? "bg-black" : "bg-white"} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>}
            </div>
        </Link>
    )
    // const defaultColor = (isAboveSmallScreen && !isTopOfPage) ? 'text-white' : 'text-black '

    return (
        <AnchorLink
            className={`relative inline-block cursor-pointer ${selectedPage === lowerCasePage ? 'text-yellow' : ''} 
            transition duration-500 ${defaultSize} group`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            <div className="max-w-md">
                {page}
                {isAboveSmallScreen && <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 ${isTopOfPage ? "bg-black" : "bg-white"} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>}
            </div>
        </AnchorLink>
    )
}


// make a portfolio website using react
// navbar component that takes selectedPage and setSelected Page as a prop and returns a navbar
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)')
    const navbarBackground = isTopOfPage ? 'shadow-none' : 'bg-black shadow-lg text-white'
    const handleLinkClick = (page) => {
        setSelectedPage(page)
        setIsMenuToggled(false)
    }
    return (
        <nav className={`${navbarBackground} transition-all duration-200 z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto px-16">
                <h4
                    className="font-playfair text-3xl font-bold"
                    onClick={() => setSelectedPage('home')}
                >
                    Baktiyar Assylzhan
                </h4>
                {/* Navbar for Desktop */}
                {isAboveSmallScreen ? (
                    <div className="flex jutify-between gap-16 font-opensans text-sm font-semibold">
                        <SmoothLink
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                        <SmoothLink
                            page="Resume"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                        <SmoothLink
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                        <SmoothLink
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                        <SmoothLink
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                        <SmoothLink
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isAboveSmallScreen={isAboveSmallScreen}
                            isTopOfPage={isTopOfPage}
                        />
                    </div>
                ) : (
                    <div>
                        <button
                            className='rounded-full bg-red p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img alt="menu-open-icon"
                                className={`${isTopOfPage ? 'brightness-0' : 'brightness-100'}`}
                                src={require("../assets/menu-icon.svg").default} />
                        </button>

                        {isMenuToggled && (
                            <motion.div
                                initial={{ opacity: 0, y: -1000 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="fixed top-0 left-0 w-full h-full bg-black text-white p-4 overflow-y-auto z-50"
                            >

                                <div
                                    className='flex flex-col gap-4 mx-auto mt-50 justify-center h-full bg-black'
                                >
                                    {/* Your links and other content */}
                                    <SmoothLink
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={() => handleLinkClick('home')}
                                        isAboveSmallScreen={isAboveSmallScreen}
                                        isTopOfPage={isTopOfPage}
                                    />
                                    <SmoothLink
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={() => handleLinkClick('about')}
                                        isAboveSmallScreen={isAboveSmallScreen}
                                        isTopOfPage={isTopOfPage}
                                    />
                                    <SmoothLink
                                        page="Skills"
                                        selectedPage={selectedPage}
                                        setSelectedPage={() => handleLinkClick('skills')}
                                        isAboveSmallScreen={isAboveSmallScreen}
                                        isTopOfPage={isTopOfPage}
                                    />
                                    <SmoothLink
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={() => handleLinkClick('projects')}
                                        isAboveSmallScreen={isAboveSmallScreen}
                                        isTopOfPage={isTopOfPage}
                                    />
                                    <SmoothLink
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={() => handleLinkClick('contact')}
                                        isAboveSmallScreen={isAboveSmallScreen}
                                        isTopOfPage={isTopOfPage}
                                    />

                                </div>
                                <button
                                    className='absolute right-16 top-10 rounded-full bg-red p-2'
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <img alt="menu-close-icon"

                                        src={require("../assets/close-icon.svg").default} />
                                </button>


                            </motion.div>
                        )}
                    </div>
                )}

            </div>

        </nav >
    )
}

export default Navbar;
