const Status = () => {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm  text-neutral-600 dark:text-neutral-400 font-sora font-thin'>
        <div className='relative inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-200 text-purple-800 '>
          <div className='absolute -ml-2 w-[6.5rem] rounded-full h-5 border-2 border-purple-300 animate-badge-pulse'></div>
          <span>available for hire</span>
        </div>
      </span>
    </div>
  );
};

export default Status;
