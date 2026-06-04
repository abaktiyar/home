import {useState, useEffect} from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}
// Code Explanation:
// 1. it takes a query as an argument
// 2. it returns a boolean value
// 3. it listens to the resize event and updates the boolean value
// 4. it returns the boolean value



export default useMediaQuery;

