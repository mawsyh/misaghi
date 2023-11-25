const Copyright = () => {
  return (
    <div className='flex text-end items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-600 font-sora'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className='text-gray-200 animate-pulse'>❤</span>
      <span>by</span>
      <a
        href='http://github.com/mawsyh'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='hover:dark:text-neutral-400 cursor-pointer'>
          mawsyh
        </span>
      </a>
    </div>
  );
};

export default Copyright;
