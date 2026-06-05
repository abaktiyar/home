import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import Resume from "./Resume";

interface AboutMeProps {
    setSelectedPage: (page: string) => void;
}

const traits = [
    { icon: <FaGraduationCap size={22} />, label: "CS Graduate", desc: "Bachelor's degree in Computer Science" },
    { icon: <FaLaptopCode size={22} />, label: "Full Stack Dev", desc: "End-to-end software development" },
    { icon: <FaRocket size={22} />, label: "Problem Solver", desc: "Creative, efficient solutions" },
];

const tags = ["Clean Code", "Reliability", "Efficiency", "Collaboration", "Growth"];

const AboutMe = ({ setSelectedPage }: AboutMeProps) => {
    return (
        <section id="about">
            <div className="relative w-full min-h-screen bg-black text-gray-300 overflow-hidden flex items-center">

                {/* Subtle dot-grid background texture */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Soft red glow behind content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06] blur-3xl bg-red-500 pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">

                    {/* Section heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="mb-14"
                    >
                        <p className="text-4xl font-bold inline border-b-4 border-red-500">About</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 items-center">

                        {/* Left: Tagline + trait cards */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6 }}
                                className="mb-10"
                            >
                                <p className="text-gray-500 text-xs tracking-widest uppercase mb-3 font-opensans">
                                    A bit more about me
                                </p>
                                <h2 className="text-3xl font-bold font-playfair leading-snug text-white">
                                    Building software that{" "}
                                    <span className="text-red-500">lasts</span>,<br />
                                    not just software that{" "}
                                    <span className="text-red-500">works</span>.
                                </h2>
                            </motion.div>

                            <div className="flex flex-col gap-3">
                                {traits.map((trait, i) => (
                                    <motion.div
                                        key={trait.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                                        className="flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-800 hover:border-red-500/40 hover:bg-white/[0.02] transition-all duration-300 group cursor-default"
                                    >
                                        <span className="text-red-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                            {trait.icon}
                                        </span>
                                        <div>
                                            <p className="text-white font-semibold text-sm leading-tight">{trait.label}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{trait.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Terminal-style bio card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <div className="rounded-xl border border-gray-800 bg-white/[0.02] overflow-hidden">

                                {/* Terminal title bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-white/[0.02]">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="text-gray-600 text-xs font-mono ml-2 select-none">about_me.txt</span>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-300 text-base leading-relaxed font-opensans">
                                        I'm deeply passionate about coding and committed to creating reliable software.
                                        My academic achievements and internships have reinforced my dedication to the
                                        art of software development. I take great satisfaction in crafting efficient,
                                        long-lasting code that not only meets functional needs but also endures.
                                    </p>

                                    {/* Divider */}
                                    <div className="my-5 border-t border-gray-800" />

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag, i) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + i * 0.08 }}
                                                className="px-3 py-1 text-xs rounded-full border border-red-500/25 text-red-400 bg-red-500/5 hover:bg-red-500/10 transition-colors cursor-default"
                                            >
                                                #{tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resume button */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="mt-6 hover:scale-105 transition-transform ease-in"
                            >
                                <Resume />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
