import { easeInOut } from 'motion/react';

const transition = { duration: 0.5, ease: easeInOut };

const reveal = (isInView: boolean) => ({
  initial: { opacity: 0 },
  animate: isInView ? { opacity: 1 } : { opacity: 0 },
  transition: { opacity: { duration: 0.5, ease: easeInOut } },
});

const popUp = {
  initial: { y: -88, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -88, opacity: 0 },
  transition,
};

const zoomIn = {
  initial: { scale: 1 },
  animate: { scale: 1.1 },
  exit: { scale: 1 },
  transition,
};

export { reveal, popUp, zoomIn };
