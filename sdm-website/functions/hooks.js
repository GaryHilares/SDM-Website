import { useEffect, useState } from 'react'

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        setMatches(window.matchMedia(query).matches);
    });
    useEffect(() => {
        setMatches(window.matchMedia(query).matches);
        const matchMedia = window.matchMedia(query);
        const changeHandler = () => { setMatches(window.matchMedia(query).matches) }
        matchMedia.addEventListener('change', changeHandler);

        return () => {
            matchMedia.removeEventListener('change', changeHandler);
        }
    }, [query]);
    return matches;
}

export { useMediaQuery };