import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

const Calendar = ({ data }: CalendarProps) => {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  return (
    <>
      <div className='relative flex flex-col'>
        <ul className='flex justify-end gap-[3px] overflow-hidden text-xs dark:text-neutral-400 md:justify-start'>
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? 'invisible' : ''}`)}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className='flex justify-start gap-[3px] overflow-hidden'>
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount === 1
                    ? 'bg-purple-300'
                    : contribution.contributionCount === 2
                    ? 'bg-purple-500'
                    : contribution.contributionCount === 3
                    ? 'bg-purple-600'
                    : contribution.contributionCount > 3
                    ? 'bg-purple-700'
                    : null;

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <motion.span
                    key={contribution.date}
                    initial='initial'
                    animate='animate'
                    variants={{
                      initial: { opacity: 0, translateY: -20 },
                      animate: {
                        opacity: 1,
                        translateY: 0,
                        transition: { delay: getRandomDelayAnimate },
                      },
                    }}
                    className={`${
                      backgroundColor
                        ? backgroundColor
                        : 'bg-neutral-300 dark:bg-neutral-800'
                    } my-[2px] block h-[12px] w-[12px] rounded-sm`}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2 text-sm'>
          <span className='dark:text-neutral-400'>Less</span>
          <ul className='flex gap-1'>
            <motion.li className='h-[10px] w-[10px] rounded-sm bg-neutral-300 dark:bg-neutral-800' />
            {[
              'bg-purple-300',
              'bg-purple-500',
              'bg-purple-600',
              'bg-purple-700',
            ].map((item, index) => (
              <motion.li
                key={item}
                initial='initial'
                animate='animate'
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className={`${item} h-[10px] w-[10px] rounded-sm`}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded bg-neutral-200 px-2 text-sm dark:bg-neutral-700'
          )}
        >
          {selectContribution?.count} contributions on{' '}
          {selectContribution?.date}
        </div>
      </div>
    </>
  );
};

export default Calendar;
