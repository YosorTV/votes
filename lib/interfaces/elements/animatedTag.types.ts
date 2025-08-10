import { ComponentType, HTMLAttributes, RefAttributes } from 'react';

import { motion } from 'motion/react';

import { TWithClassName, TWithId } from '@/lib/interfaces/shared';

type MotionTagType = keyof typeof motion;

export type TAnimatedTag = TWithClassName &
  TWithId & {
    tag: MotionTagType;
    inMotion?: boolean;
  };

export type TMotionTag = ComponentType<HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>>;
