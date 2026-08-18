import { useEffect, useState } from 'react';

const useBreakpoint = (width: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [width]);

  return matches;
};

export default useBreakpoint;
