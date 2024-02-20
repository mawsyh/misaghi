import Link from 'next/link';
import { FiCalendar, FiClock, FiVideo } from 'react-icons/fi';

const BookACall = () => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Book a Call</h3>
      <Link
        href='https://calendly.com/moh-mir36/1on1-session'
        target='_blank'
        data-aos-duration='1000'
        className='flex flex-col space-y-5 bg-gradient-to-tr bg-white dark:from-black dark:to-purple-950 dark:text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300 border dark:border-purple-500'
      >
        <div className='flex gap-5 items-start justify-between'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-base md:text-lg font-medium'>
              <span>1 on 1 session</span>
            </div>
            <p className='dark:text-neutral-300 text-sm md:text-base'>
              Let's talk about anything you want. I'm here to help you.
            </p>
          </div>
          <div className='p-3 border-2 border-neutral-400 dark:border-purple-600 dark:text-neutral-100 rounded-full'>
            <FiCalendar size={22} />
          </div>
        </div>
        <div className='flex items-center gap-5 dark:text-neutral-200 text-sm'>
          <div className='flex items-center gap-2'>
            <FiClock size={18} />
            <span>15-30 Minutes</span>
          </div>
          <div className='flex items-center gap-2'>
            <FiVideo size={18} />
            <span>Google Meet</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookACall;
