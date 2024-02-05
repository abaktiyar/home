import { React } from 'react';

const link = "https://drive.google.com/file/d/194FSLw3tzM2h5sUFOFKh5w3sEH5covTY/view?usp=sharing"

const Resume = () => {
    return <a
        className="bg-red-500 text-white rounded-lg py-3 m-2 px-7 font-semibold
      hover:bg-red-600 hover:text-white transition duration-500"
        href={link}
    >
        Resume
    </a>
}
export default Resume;