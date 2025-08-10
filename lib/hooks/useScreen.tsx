'use client';

import { useMemo } from 'react';

import SCREENS from '@/lib/constants/screens';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

const useScreen = () => {
  const xs = useMediaQuery(SCREENS.xs);
  const sm = useMediaQuery(SCREENS.sm);
  const md = useMediaQuery(SCREENS.md);
  const lg = useMediaQuery(SCREENS.lg);
  const xl = useMediaQuery(SCREENS.xl);
  const xxl = useMediaQuery(SCREENS.xxl);

  const screens = useMemo(() => {
    return { xs, sm, md, lg, xl, xxl };
  }, [xs, sm, md, lg, xl, xxl]);

  return screens;
};

export default useScreen;
