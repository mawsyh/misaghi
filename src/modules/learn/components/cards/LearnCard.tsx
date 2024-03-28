import { AiFillFire as NewIcon } from 'react-icons/ai';
import { BiLabel as LevelIcon } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';

import Card from '@/common/components/elements/Card';
import { ContentProps } from '@/common/types/learn';

import { CoverImage, Description } from './CardComponents';

const LearnCard = ({
  title,
  slug,
  description,
  image,
  is_new,
  level,
  is_medium,
  date,
}: ContentProps) => {
  return (
    <a
      href={`https://medium.com/@moh.mir36/${slug}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Card className='group relative border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%] cursor-pointer'>
        {is_new && (
          <div className='flex items-center gap-1 absolute top-0 right-0 bg-yellow-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]'>
            <NewIcon size={15} />
            <span>New</span>
          </div>
        )}
        <CoverImage title={title} image={image} is_medium={is_medium} />
        <div className='flex flex-col justify-between p-5 space-y-3'>
          <Description title={title} description={description} />
          <div className='flex justify-between gap-4 text-neutral-600 dark:text-neutral-400'>
            <div className='flex gap-1 items-center'>
              <MdDateRange size={16} />
              <span className='text-sm ml-0.5'>{date}</span>
            </div>
            <div className='flex gap-1 items-center'>
              <LevelIcon size={16} />
              <span className='text-sm ml-0.5'>{level}</span>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default LearnCard;
