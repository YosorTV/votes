'use client';

import { FC, PropsWithChildren, useRef } from 'react';

import { motion, useInView } from 'motion/react';

import { reveal } from '@/assets/animations';
import { TAnimatedTag, TMotionTag } from '@/lib/interfaces/elements/animatedTag.types';

const Tag: FC<PropsWithChildren<TAnimatedTag>> = ({ children, tag = 'div', inMotion = true, id, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const MotionTag = motion.create<TMotionTag>(tag);

  return (
    <MotionTag ref={ref} id={String(id)} {...(inMotion ? reveal(isInView) : reveal(true))} {...props}>
      {children}
    </MotionTag>
  );
};

export default Tag;
