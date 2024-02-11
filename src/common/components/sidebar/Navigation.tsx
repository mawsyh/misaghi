import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { useWindowSize } from 'usehooks-ts';

import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Menu from './Menu';
import MenuItem from './MenuItem';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const { width } = useWindowSize();
  const isMobile = width < 480;

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  const cn = 'group-hover:-rotate-12 transition-all duration-300';

  return (
    <div>
      <Menu list={filterdMenu} />
      <div className='pt-1'>
        <MenuItem
          title={isMobile ? 'Command' : 'cmd + k'}
          href='#'
          icon={<CommandIcon className={cn} size={20} />}
          isExternal={false}
          onClick={() => handleOpenCommandPalette()}
        />
      </div>
    </div>
  );
};

export default Navigation;
