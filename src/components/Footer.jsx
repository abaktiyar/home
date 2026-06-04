import SocialMeidaIcons from './SocialMediaIcons';

const Footer = () => {
    return (

        <footer className="bg-gray-900 pt-10 pb-10">
            <div className="w-5/6 mx-auto">
                <div className="[&_img]:brightness-0 [&_img]:invert">
                    <SocialMeidaIcons />
                </div>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className='font-playfair font-semibold text-2xl text-white'>Baktiyar Assylzhan</p>
                    <p className="font-playfair text-md text-gray-400 mt-2 md:mt-0">Software Engineer · Open to opportunities</p>
                </div>
            </div>
        </footer>
    );

}
export default Footer;
