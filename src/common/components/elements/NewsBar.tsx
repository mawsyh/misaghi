import Image from './Image';

const NewsBar = () => {
  return (
    <div className='hidden xl:flex gap-x-2 items-center justify-center p-2.5 shadow-lg backdrop-blur-2xl bg-no-repeat bg-cover text-sm dark:text-neutral-300 dark:border-b dark:border-neutral-800'>
      <span>🚀</span>
      <span>some text :</span>
      <a href='somelink' target='_blank' className='ml-0.5 underline'>
        some link
      </a>
      <Image
        src='/images/dot_new_animated.svg'
        width={30}
        height={30}
        alt='new'
      />
    </div>
  );
};

export default NewsBar;
