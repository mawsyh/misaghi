import { motion } from 'framer-motion';

import { ContentProps, ProjectProps } from '@/common/types/learn';

import LearnCard from './components/cards/LearnCard';
import ProjectCard from './components/cards/ProjectCard';

interface LearnModuleProps {
  type: 'blog' | 'project';
  contents: ContentProps[] | ProjectProps[];
}

const CardModule = ({ type, contents }: LearnModuleProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2'>
      {contents?.map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {type === 'blog' ? (
            <LearnCard {...content as ContentProps} />
          ) : (
            <ProjectCard {...content as ProjectProps} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CardModule;
