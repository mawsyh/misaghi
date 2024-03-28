export const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-between'>
        <div className='text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300 truncate'>
          {title}
        </div>
      </div>
      <p className='text-neutral-700 dark:text-neutral-400 text-[.9375rem] leading-relaxed'>
        {description}
      </p>
    </div>
  );
};

import { Suspense } from 'react';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import Skeleton from 'react-loading-skeleton';

import Image from '@/common/components/elements/Image';
import SkeletonLoader from '@/common/components/elements/SkeletonLoader';

export const CoverImage = ({ title, image, is_medium }: { title: string, image: string, is_medium: boolean }) => {
  return (
    <div className='relative'>
      <Suspense
        fallback={
          <SkeletonLoader>
            <Skeleton
              height={200}
              containerClassName='flex'
              className='rounded-t-xl h-48 object-cover object-left'
            />
          </SkeletonLoader>
        }
      >
        {image ? (
          <Image
            src={image}
            width={400}
            height={200}
            alt={title}
            className='rounded-t-xl h-48 object-cover object-left w-full'
          />
        ) : null}
      </Suspense>
      <div className='flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium'>
        <span>{is_medium ? 'Read more on medium' : 'Open Project'}</span>
        <ViewIcon size={20} />
      </div>
    </div>
  );
};
