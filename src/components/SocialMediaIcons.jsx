const SocialMediaIcons = () => {

    return (
        <div className="flex m-3 justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.linkedin.com/in/assylzhan-baktiyar-333679198/"
                target="_blank" rel="noreferrer">
                <img
                    alt="LinkedIn"
                    src="../assets/linkedin.png"
                    style={{ filter: 'grayscale(100%)' }}
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.github.com/assylzhanb"
                target="_blank" rel="noreferrer">
                <img
                    alt="Github"
                    src="../assets/github.png"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.instagram.com/assylzhanbaktiyar"
                target="_blank" rel="noreferrer">
                <img
                    alt="Instagram"
                    src="../assets/instagram.png"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.facebook.com/asylzhan.bakhtiyar/"
                target="_blank" rel="noreferrer">
                <img
                    alt="Facebook"
                    src="../assets/facebook.png"
                />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"

                width="30px"
                height="30px"
                href="https://www.youtube.com/@angis27"
                target="_blank" rel="noreferrer">
                <img
                    alt="YouTube"
                    src="../assets/youtube.png"
                />
            </a>


        </div>
    )
}

export default SocialMediaIcons;
