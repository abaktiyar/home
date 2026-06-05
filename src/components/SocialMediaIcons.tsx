const SocialMediaIcons = () => {
    return (
        <div className="flex m-3 justify-center md:justify-start my-10 gap-7">
            <a
                aria-label="LinkedIn profile"
                className="hover:opacity-50 hover:scale-110 transition duration-200"
                href="https://www.linkedin.com/in/abaktiyar/"
                target="_blank" rel="noopener noreferrer">
                <img alt="" src={require("../assets/linkedin.png")} width="30" />
            </a>
            <a
                aria-label="GitHub profile"
                className="hover:opacity-50 hover:scale-110 transition duration-200"
                href="https://www.github.com/abaktiyar"
                target="_blank" rel="noopener noreferrer">
                <img alt="" src={require("../assets/github.png")} width="25" />
            </a>
            <a
                aria-label="Instagram profile"
                className="hover:opacity-50 hover:scale-110 transition duration-200"
                href="https://www.instagram.com/abaktiyar_"
                target="_blank" rel="noopener noreferrer">
                <img alt="" src={require("../assets/instagram.png")} width="25" />
            </a>
            <a
                aria-label="Facebook profile"
                className="hover:opacity-50 hover:scale-110 transition duration-200"
                href="https://www.facebook.com/asylzhan.bakhtiyar/"
                target="_blank" rel="noopener noreferrer">
                <img alt="" src={require("../assets/facebook.png")} width="25" />
            </a>
            <a
                aria-label="YouTube channel"
                className="hover:opacity-50 hover:scale-110 transition duration-200"
                href="https://www.youtube.com/@angis27"
                target="_blank" rel="noopener noreferrer">
                <img alt="" src={require("../assets/youtube.png")} width="25" />
            </a>
        </div>
    );
}

export default SocialMediaIcons;
