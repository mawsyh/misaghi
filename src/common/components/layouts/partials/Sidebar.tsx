import { useEffect, useState } from 'react';
import useIsMobile from '@/common/hooks/useIsMobile';
import Breakline from '../../elements/Breakline';
import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';
import Status from '../../elements/Status';
import ThemeToggleButton from '../../elements/ThemeToggleButton';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='sidebar'
      className='sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8'
    >
      <Profile isScrolled={isScrolled} />
      {!isMobile && (
        <>
          <Breakline />
          <Navigation />
          <Breakline />
          {!isMobile && (
            <div className='flex items-center w-full justify-between px-4'>
              <Status />
              <ThemeToggleButton />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
