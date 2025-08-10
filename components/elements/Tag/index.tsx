'use client';

import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'motion/react';

import { reveal } from '@/assets/animations';
import { TAnimatedTag, TMotionTag } from '@/lib/interfaces/elements/animatedTag.types';

const Tag: FC<PropsWithChildren<TAnimatedTag>> = ({ children, tag = 'div', inMotion = true, id, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatches by adding motion props only after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionTag = motion.create<TMotionTag>(tag);

  return (
    <MotionTag ref={ref} id={String(id)} {...(mounted && inMotion ? reveal(isInView) : {})} {...props}>
      {children}
    </MotionTag>
  );
};

export default Tag;
