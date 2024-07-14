import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = ({ setSelectedPage }) => {
    // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const programmingLanguages = ['C/C++', 'Java', 'Python', 'TypeScript'];
    const frameworks = ['React.js', 'Express.js', 'Spring', 'PyTorch'];
    const developerTools = ['Git', 'Vim', 'Bash', '(C-)Make', 'MongoDB', 'Node.js', 'MySQL'];
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 ">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        My skills encompass technical proficiency in multiple programming languages and frameworks, experience in advanced problem-solving, and strong soft skills.
                    </p>
                </motion.div>
            </div>

            {/* SKILLS */}
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                        <ul>
                            {programmingLanguages.map((language, index) => (
                                <li key={index} className="mb-1">{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
                        <ul>
                            {frameworks.map((framework, index) => (
                                <li key={index} className="mb-1">{framework}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
                        <ul>
                            {developerTools.map((tool, index) => (
                                <li key={index} className="mb-1">{tool}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;
