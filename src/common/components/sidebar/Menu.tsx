import { MenuItemProps } from '@/common/types/menu';
import useIsMobile from '@/common/hooks/useIsMobile';

import MenuItem from './MenuItem';

type MenuProps = {
  title?: string;
  list: MenuItemProps[];
};

const Menu = ({ title, list }: MenuProps) => {
  const isMobile = useIsMobile();

  return (
    <div className='flex flex-col space-y-1'>
      {title && (
        <div className={`${isMobile ? "mt-24" : "mt-1"} hidden lg:block text-sm ml-2 mb-2 text-neutral-600 dark:text-neutral-500 font-sora lg:mt-0`}>
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;
