'use client';

import { useLayoutEffect, useState } from 'react';

import debounce from '@/utils/helpers/debounce';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);

    const media = window.matchMedia(query);
    const controller = new AbortController();

    const updateMatches = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    const debouncedUpdate = debounce(updateMatches, 100);

    updateMatches();

    media.addEventListener('change', debouncedUpdate, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [matches, query]);

  if (!mounted) {
    return false;
  }

  return matches;
};

export default useMediaQuery;
