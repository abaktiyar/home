import React from 'react'
import { motion } from "framer-motion";
import Resume from "./Resume";
import { TypeAnimation } from 'react-type-animation';

const aboutMeText = "I'm deeply passionate about coding and committed to creating reliable software. My academic achievements and internships have reinforced my dedication to the art of software development. I take great satisfaction in crafting efficient, long-lasting code that not only meets functional needs but also endures."

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
                            <TypeAnimation
                                sequence={[
                                    aboutMeText,
                                    1000,
                                ]}
                                wrapper="span"
                                speed={80}
                                style={{ fontSize: `20px`, display: 'inline-block' }}
                                repeat={Infinity}

                            />
                        </div>
                    </div>
                    <div className="mt-28 hover:scale-110 ease-in transition-all transform-gpu">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 2 }}
                            variants={{
                                hidden: { opacity: 0, x: 0 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >


                            <Resume />

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
