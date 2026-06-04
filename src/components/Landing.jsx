import SocialMediaIcons from "./SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "./Resume";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="flex align-middle justify-center gap-16 py-5 h-full bg-gradient-to-br from-gray-50 to-white"
    >
      <div className='flex flex-col md:flex-row md:justify-between md:items-center basis-4/5 my-32 mx-10 p-5 rounded-3xl'>
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 flex justify-center md:order-2">
          {isAboveLarge ? (

            <img
              alt="profile"
              className="hover:saturate-150 hover:scale-105 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[300px] rounded-xl shadow-md hover:shadow-xl"
              src={require("../assets/profile-image.png")}
            />
          ) : (
            <img
              alt="profile"
              className="z-10 mt-10 w-full max-w-[300px] md:max-w-[500px] rounded-lg"
              src={require("../assets/profile-image.png")}
            />
          )}
        </div>



        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 m-10">
          {/* HEADINGS */}
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
            <div className="p-5 text-black font-semibold max-h-20 flex justify-center md:justify-start">
              <TypeAnimation
                sequence={[
                  'I am Baktiyar Assylzhan',
                  1000,
                  'I am a Software Engineer',
                  1000,
                  // 'I am an R&D intern',
                  // 1000,
                  'I am a full-stack developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}

              />
            </div>

            <p className="mt-5 mb-5 text-gray-400 text-center p-5 md:text-start">
              I am a software engineer with Bachelor's degree in Computer Science from <a className="font-bold underline" href="https://unist.ac.kr">UNIST</a> in South Korea.
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Resume />
            <AnchorLink
              className="rounded-r-sm  py-0.5 pr-0.5 pl-0.5 m-2"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white rounded-lg transition duration-300 w-full h-full flex items-center justify-center px-10 font-semibold">
                Contact Me
              </div>
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );

};

export default Landing;
