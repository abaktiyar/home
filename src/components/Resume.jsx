import { React } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return <Link
        className="bg-red-500 text-white rounded-lg py-3 m-2 px-7 font-semibold
            hover:bg-red-600 hover:text-white transition duration-500"
        to="/resume"
    > Resume </Link>
}
export default Resume;