const SocialMediaIcons = () => {

    return (
        <div className="flex m-3 justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.linkedin.com/in/abaktiyar/"
                target="_blank" rel="noreferrer">
                <img
                    alt="LinkedIn"
                    src={require("../assets/linkedin.png")}
                    width="30px"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.github.com/abaktiyar"
                target="_blank" rel="noreferrer">
                <img
                    alt="Github"
                    src={require("../assets/github.png")}
                    width="25px"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.instagram.com/abaktiyar_"
                target="_blank" rel="noreferrer">
                <img
                    alt="Instagram"
                    src={require("../assets/instagram.png")}
                    width="25px"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"


                href="https://www.facebook.com/asylzhan.bakhtiyar/"
                target="_blank" rel="noreferrer">
                <img
                    alt="Facebook"
                    src={require("../assets/facebook.png")}
                    width="25px"
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
                    src={require("../assets/youtube.png")}
                    width="25px"
                />
            </a>


        </div>
    )
}

export default SocialMediaIcons;
