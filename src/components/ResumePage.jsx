import React from 'react'
import { useState, useEffect } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { Link } from 'react-router-dom'
import { educationList, experienceList, honorsList, CVLink } from '../assets/resumeData'



const EducationItem = ({ name, period, location, specifics }) => {
    return (
        <div id="timeline-item" className="mb-4 p-3 border-2 rounded-lg border-gray-500 w-full">
            <h3 className="text-l font-semibold">{name}</h3>
            <div className='flex flex-row gap-1'>
                <p className="text-sm font-semibold">{location}</p>
                <p className="text-sm font-semibold text-red-500"> | </p>
                <p className="text-sm text-red-500">{period}</p>
            </div>
            <ul className="list-disc ml-4">
                {specifics.map((specific, index) => (
                    <li key={index} className="text-sm font-normal">{specific}</li>
                ))}
            </ul>
        </div>
    )
}
const ExperienceItem = ({ position, company, link, period, location, specifics }) => {
    return (
        <div id="timeline-item" className="mb-4 p-3 border-2 rounded-lg border-gray-500 w-full">
            <div className='flex flex-row justify-between items-end'>
                <h3 className="text-l font-semibold">{position}</h3>
                <p className="text-sm">{period}</p>
            </div>
            <div className="flex flex-row gap-1">
                <a href={link} className="text-sm font-semibold text-red-500">{company}</a>
                <p className="text-sm font-semibold"> | </p>
                <p className="text-sm text-gray-500">{location}</p>
            </div>
            <ul className="list-disc ml-4">
                {specifics.map((specific, index) => (
                    <li key={index} className="text-sm font-normal">{specific}</li>
                ))}
            </ul>
        </div>
    )
}

const HonorsItem = ({ name, period, what }) => {
    return (
        <div id="timeline-item" className="mb-4 p-3 border-2 rounded-lg border-gray-500 w-full">
            <h3 className="text-l font-semibold">{name}</h3>
            <div className='flex flex-row gap-1'>
                <p className="text-sm font-semibold text-red-500">{period} |</p>
                <p className="text-sm text-gray-500">{what}</p>
            </div>
        </div>
    )
}


const TimeLineContainer = ({ list, title }) => {
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="border-l-2 border-black">
                {list.map((item, index) => (
                    <div className="flex flex-row justify-items-start align-middle" key={index}>
                        <div className="h-3 bg-red-500 w-3 mt-4 rounded-full ml-[-6px]">
                            <div className="h-2 w-2 bg-gray-100 rounded-full mt-0.5 ml-0.5"></div>
                        </div>
                        <div className="h-1 bg-red-500 w-5 mt-5"></div>
                        {title === "Education" && <EducationItem name={item.name} period={item.period} location={item.location} specifics={item.specifics} />}
                        {title === "Experience" && <ExperienceItem position={item.position} company={item.company} location={item.location} link={item.link} period={item.period} specifics={item.specifics} />}
                        {title === "Honors" && <HonorsItem name={item.name} period={item.period} what={item.what} />}
                    </div>
                ))}
            </div>
        </div>

    )
}



const ResumePage = () => {
    const [isTopOfPage, setIsTopOfPage] = useState(true)
    const isDesktop = useMediaQuery('(min-width: 1060px)')
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true)
            }
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <div className="flex flex-col">
            <ResumeNavbar isTopOfPage={isTopOfPage} />
            <div className="flex flex-col py-5 items-center flex-grow bg-gray-100 mt-10">
                <div className={`flex ${isDesktop ? "flex-row" : "flex-col"} w-11/12 rounded-xl border-gray-600 border-solid border-2 mt-10`}>
                    <div id="left" className="flex flex-col w-full md:w-1/2 px-8 py-6 ">
                        <TimeLineContainer list={educationList} title="Education" />
                        <TimeLineContainer list={honorsList} title="Honors" />
                    </div>
                    <div id="right" className="flex flex-col w-full md:w-1/2 px-8 py-6 ">
                        <TimeLineContainer list={experienceList} title="Experience" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ResumeNavbar = ({ isTopOfPage }) => {
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)')
    const defaultSize = isAboveSmallScreen ? 'text-lg' : 'text-2xl hover:text-yellow'
    const navbarBackground = isTopOfPage ? 'bg-black' : 'bg-black bg-opacity-80 shadow-lg'
    return (
        <nav className={`transition-all duration-200 z-40 w-full fixed top-0 py-6 text-white ${navbarBackground}`}>
            <div className='flex items-center justify-center gap-10 mx-auto px-16'>
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <Link to="/home"
                        className={`relative inline-block cursor-pointer transition duration-500 ${defaultSize} group `}
                    >
                        <div className='max-w-md'>
                            Home
                            <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <a href={CVLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative inline-block cursor-pointer transition duration-500 ${defaultSize} group `}
                    >
                        <div className='max-w-md'>
                            Open CV
                            <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                        </div>
                    </a>
                </div>
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <a href="https://www.github.com/assylzhanb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative inline-block cursor-pointer transition duration-500 ${defaultSize} group `}
                    >
                        <div className='max-w-md'>
                            GitHub
                            <span className={`absolute bottom-0 left-0 inline-block w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default ResumePage
