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
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-5"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (

          <img
            alt="profile"
            className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-lg"
            src={require("../assets/profile-image.png")}
          />

        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-lg"
            src={require("../assets/profile-image.png")}
          />
        )}
      </div>



      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 m-10">
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
          <div className="p-5 text-black font-semibold">
            <TypeAnimation
              sequence={[
                'I am Baktiyar Assylzhan',
                1000,
                'I am a Software Engineer',
                1000,
                'I am an R&D intern',
                1000,
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
            Currently studying for a bachelor's degree in Computer Science and Engineering at UNIST, South Korea, possessing self-assurance and a strong work ethic.
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
    </section>
  );

};

export default Landing;
