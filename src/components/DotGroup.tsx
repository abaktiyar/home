import AnchorLink from "react-anchor-link-smooth-scroll";

interface DotGroupProps {
    selectedPage: string;
    setSelectedPage: (page: string) => void;
}

const DotGroup = ({ selectedPage, setSelectedPage }: DotGroupProps) => {
    const selectedStyles = `relative bg-red-500 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-red-500 before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7" role="navigation" aria-label="Page sections">
            <AnchorLink
                href="#home"
                aria-label="Home section"
                className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("home")}
            />
            <AnchorLink
                href="#about"
                aria-label="About section"
                className={`${selectedPage === "about" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("about")}
            />
            <AnchorLink
                href="#skills"
                aria-label="Skills section"
                className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("skills")}
            />
            <AnchorLink
                href="#projects"
                aria-label="Projects section"
                className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("projects")}
            />
            <AnchorLink
                href="#contact"
                aria-label="Contact section"
                className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage("contact")}
            />
        </div>
    );
};

export default DotGroup;
