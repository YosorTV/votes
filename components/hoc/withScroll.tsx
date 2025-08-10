'use client';

import { ComponentType, FC, useEffect, useMemo, useRef, useState } from 'react';

import { AnimatePresence, motion, useScroll } from 'motion/react';

import { popUp } from '@/assets/animations';
import { initialScrollState } from '@/lib/constants/system';
import { TWithScroll } from '@/lib/interfaces/hoc/withScroll.types';

const withScroll = <P extends object>(WrappedComponent: ComponentType<P & TWithScroll>) => {
  const WithScroll: FC<P> = (props) => {
    const lastScrollYRef = useRef<number>(0);
    const isInitialMount = useRef<boolean>(true);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { scrollY } = useScroll();
    const [scrollState, setScrollState] = useState(initialScrollState);

    const { isVisible, hasScrolled, scrollDirection } = scrollState;

    useEffect(() => {
      const handleScrollChange = () => {
        const currentScrollY = scrollY.get();
        const lastScrollY = lastScrollYRef.current;

        if (Math.abs(currentScrollY - lastScrollY) < 10) {
          return;
        }

        const direction = currentScrollY > lastScrollY ? 'down' : 'up';

        lastScrollYRef.current = currentScrollY;

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }

        setScrollState((prev) => {
          let { isVisible: prevIsVisible } = prev;

          if (direction === 'up' || currentScrollY < 100) {
            prevIsVisible = true;
          } else if (direction === 'down' && currentScrollY > 100) {
            prevIsVisible = false;
            scrollTimeoutRef.current = setTimeout(() => {
              setScrollState((state) => ({
                ...state,
                isVisible: true,
              }));
            }, 1000);
          }

          return {
            ...prev,
            scrollDirection: direction,
            hasScrolled: true,
            isVisible: prevIsVisible,
          };
        });
      };

      const unsubscribeScroll = scrollY.on('change', handleScrollChange);

      return () => {
        unsubscribeScroll();
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [scrollY]);

    const scrollProps: TWithScroll = useMemo(() => {
      return {
        isVisible,
        scrollDirection,
        scrollY: scrollY.get(),
      };
    }, [isVisible, scrollDirection, scrollY]);

    if (isInitialMount.current || !hasScrolled) {
      isInitialMount.current = false;
      return <WrappedComponent {...props} {...scrollProps} />;
    }

    return (
      <AnimatePresence mode='wait'>
        {isVisible && (
          <motion.div {...popUp} className='fixed top-0 right-0 left-0 z-40 w-full bg-background/60 backdrop-blur-xl'>
            <WrappedComponent {...props} {...scrollProps} />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  WithScroll.displayName = `withScroll(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithScroll;
};

export default withScroll;
