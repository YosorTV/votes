'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import Image from '@/elements/Image';
import Tag from '@/elements/Tag';
import Text from '@/elements/Text';
import Title from '@/elements/Title';
import NOMINANTS from '@/lib/constants/nominants';
import { TWithId } from '@/lib/interfaces/shared';
import Vote from '@/units/Vote';

const Nominants: FC<TWithId> = ({ id }) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [percentages, setPercentages] = useState<number[]>([]);

  // Generate percentages where the first item is fixed to 34% and the rest are
  // random, strictly non-increasing, and sum to the remaining 66%
  const buildLeaderboardPercents = useCallback((numItems: number): number[] => {
    if (numItems <= 0) return [];

    if (numItems === 1) return [100];

    const first = 34;
    const restCount = numItems - 1;
    const totalRest = 100 - first; // 66

    const weights = Array.from({ length: restCount }, () => Math.random());
    const totalWeight = weights.reduce((sum, w) => sum + w, 0) || 1;

    const raw = weights.map((w) => Math.floor((w / totalWeight) * totalRest));
    const sumSoFar = raw.reduce((s, v) => s + v, 0);

    raw[raw.length - 1] += totalRest - sumSoFar; // fix rounding drift

    // Sort rest in descending order to ensure non-increasing sequence after 34
    const restDesc = raw.sort((a, b) => b - a);

    return [first, ...restDesc];
  }, []);

  // Load state from localStorage once
  useEffect(() => {
    try {
      const storedFlag = localStorage.getItem('votes_show_results');
      const storedPercents = localStorage.getItem('votes_results');

      if (storedFlag === 'true' && storedPercents) {
        const parsed = JSON.parse(storedPercents) as number[];

        if (Array.isArray(parsed) && parsed.length === NOMINANTS.length) {
          const sortedDesc = [...parsed].sort((a, b) => b - a);

          setPercentages(sortedDesc);
          setShowResults(true);
        }
      }
    } catch {
      // ignore localStorage read errors
    }
  }, []);

  const handleVoteSuccess = useCallback(() => {
    const generated = buildLeaderboardPercents(NOMINANTS.length);

    setPercentages(generated);
    setShowResults(true);
    try {
      localStorage.setItem('votes_show_results', 'true');
      localStorage.setItem('votes_results', JSON.stringify(generated));
    } catch {
      // ignore localStorage write errors
    }
  }, [buildLeaderboardPercents]);

  return (
    <Tag tag='section' id={id} className='bg-background py-10 sm:py-20' inMotion={false}>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <Title level='2' variant='secondary'>
          Наши номинанты
        </Title>
        <Text variant='secondary' className='mt-6'>
          Мы - динамичная группа людей, которые горят своей работой и готовы приносить максимальную пользу.
        </Text>
      </div>
      <ul className='mx-auto mt-10 max-w-3xl space-y-6 lg:mx-0 lg:max-w-4xl'>
        {NOMINANTS.map((person, index) => (
          <li key={person.name}>
            <div className='flex flex-col items-center justify-between rounded-2xl border border-secondary/10 p-3 md:flex-row md:items-center'>
              <div className='relative flex flex-col items-center gap-4 md:flex-row md:items-center'>
                <div
                  className='absolute -top-1 -left-1 flex h-6 w-6 items-center justify-center rounded-md bg-secondary text-base font-bold
                    text-primary'
                >
                  {index + 1}
                </div>
                <Image
                  alt='person'
                  src={person.imageUrl}
                  width={160}
                  height={160}
                  className='mx-auto h-60 w-full rounded-md object-cover md:w-60'
                />
                <div className='flex w-full flex-col justify-center text-center md:text-left'>
                  <Title level='4' variant='tertiary' className='text-lg'>
                    {person.name}
                  </Title>
                  <Text variant='secondary' className='mt-1 text-center text-sm text-info md:text-left'>
                    {person.role}
                  </Text>
                </div>
              </div>

              <div className='pt-4 md:pl-4'>
                {showResults ? (
                  <span className='text-lg font-extrabold text-secondary md:text-xl'>{percentages[index]}%</span>
                ) : (
                  <Vote person={person} onSuccess={handleVoteSuccess} />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Tag>
  );
};

export default Nominants;
