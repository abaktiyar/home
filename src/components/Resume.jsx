import { React } from 'react';

const link = "https://drive.google.com/file/d/1yZcJihxAH-DlChmD5N1Ju1TKKIt3ZZz5/view?usp=sharing"

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