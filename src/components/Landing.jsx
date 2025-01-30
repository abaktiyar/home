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
      className="flex  align-middle justify-center gap-16 py-5 h-full"
    >
      <style jsx>{`
        @keyframes shadowPulse {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 rgba(239, 68, 68, 0.4);
          }
          50% {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(239, 68, 68, 0.4);
          }
        }

        .animate-shadowPulse {
          animation: shadowPulse 3s infinite;
        }
      `}</style>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-16 border-2 basis-4/5 my-32 mx-10 border-black p-5 rounded-3xl shadow-lg animate-shadowPulse'>
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 flex justify-center md:order-2">
          {isAboveLarge ? (

            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[300px] rounded-lg"
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

            <p className="mt-10 mb-7 text-gray-400 text-center p-5 md:text-start">
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
              <div className="bg-gray-200 hover:text-red-500 rounded-lg transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
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
