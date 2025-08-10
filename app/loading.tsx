'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            return prev;
          }

          return prev + 10;
        });
      }, 100);

      return () => clearInterval(timer);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 500);
    };

    // Reset progress when route changes
    setProgress(0);

    // Simulate loading start
    handleStart();

    // Simulate loading complete after a delay
    const completeTimer = setTimeout(handleComplete, 1000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [pathname]);

  return (
    <div className='fixed top-0 right-0 left-0 z-50'>
      <div className='overflow-hidden rounded-full bg-secondary-foreground'>
        <div style={{ width: `${progress}%` }} className='h-2 rounded-full bg-info' />
      </div>
    </div>
  );
}
