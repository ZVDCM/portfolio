'use client';

import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQueryList = window.matchMedia(query);
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
}
