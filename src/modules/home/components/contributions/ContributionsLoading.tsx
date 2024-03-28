import Skeleton from 'react-loading-skeleton';

import SkeletonLoader from '@/common/components/elements/SkeletonLoader';

const ContributionsLoading = () => {
  return (
    <SkeletonLoader>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <Skeleton
            height={80}
            containerClassName='w-1/3'
            className='!rounded-xl'
          />
          <Skeleton
            height={80}
            containerClassName='w-1/3'
            className='!rounded-xl'
          />
          <Skeleton
            height={80}
            containerClassName='w-1/3'
            className='!rounded-xl'
          />
        </div>
        <Skeleton
          height={140}
          containerClassName='flex'
          className='!rounded-xl'
        />
      </div>
    </SkeletonLoader>
  );
};

export default ContributionsLoading;
