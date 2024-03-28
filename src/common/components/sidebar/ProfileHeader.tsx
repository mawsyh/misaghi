import clsx from 'clsx';
import Link from 'next/link';

import Image from '../elements/Image';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <Link href='/'>
        <Image
          src='/images/misaghi.jpg'
          alt='Ryan Misaqi'
          width={100}
          height={100}
          rounded='rounded-full'
          className='lg:hover:scale-105'
        />
      </Link>
      <div className='flex gap-2 items-center mt-1 lg:mt-4'>
        <Link href='/' passHref>
          <h2 className='flex-grow text-lg lg:text-xl font-sora font-medium'>
            Ryan Misaqi
          </h2>
        </Link>
      </div>
      <div className='hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300'>
        @mawsyh
      </div>
    </div>
  );
};

export default ProfileHeader;
