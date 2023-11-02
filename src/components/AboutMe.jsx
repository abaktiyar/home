import React from 'react'
import { motion } from "framer-motion";

const AboutMe = ({ setSelectedPage }) => {
    return (
        <section id="about" className="">
            <div name='about' className='w-full h-screen bg-black text-gray-300'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <p className='text-4xl font-bold inline border-b-4 border-red-500'>
                                    About
                                </p>
                            </motion.div>
                        </div>
                        <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <p>Hi. My name is Assylzhan.</p>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <p>I'm deeply passionate about coding and committed to creating reliable software. My academic achievements and internships have reinforced my dedication to the art of software development. I take great satisfaction in crafting efficient, long-lasting code that not only meets functional needs but also endures. I'm prepared to launch a fulfilling career where my passion translates into innovative, dependable software solutions.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
