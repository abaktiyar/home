import SocialMeidaIcons from './SocialMediaIcons';
import { motion } from 'framer-motion';

const Footer = () => {
    return (

        <footer className="h-64 bg-gray-300 pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMeidaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className='font-playfair font-semibold text-2xl '>Baktiyar Assylzhan</p>
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
                        <p className="font-playfair text-md ">Wubba lubba dub dub</p>
                    </motion.div>
                </div>
            </div>

        </footer>
    );

}
export default Footer;
