import { AiFillFire as NewIcon } from 'react-icons/ai';

import Card from '@/common/components/elements/Card';
import { ProjectProps } from '@/common/types/learn';

import { CoverImage, Description } from './CardComponents';

const ProjectCard = ({
  id,
  title,
  description,
  image,
  is_new,
}: ProjectProps) => {
  return (
    <a
      href={`https://${id}.misaqi.com/`}
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
        <CoverImage title={title} image={image} is_medium={false} />
        <div className='flex flex-col justify-between p-5 space-y-3'>
          <Description title={title} description={description} />
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;
