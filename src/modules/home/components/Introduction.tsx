import { TextGenerateEffect } from '@/common/components/elements/TextGenerateEffect';

const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1 className='font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-400 from-neutral-900 to-neutral-500 bg-opacity-50'>
            Mohammad Misaghi
          </h1>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>Working remotely from Tehran</li>
          </ul>
        </div>
      </div>

      <div className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
        {TextGenerateEffect({
          words:
            'Seasoned Software Engineer especially in Frontend side, with a passion for creating fintech related tools and website. I work with JavaScript and specialize in all-things web. I thrive on collaborating with teams to deliver efficient, scalable, and visually appealing web applications.',
        })}
      </div>
    </section>
  );
};

export default Introduction;
