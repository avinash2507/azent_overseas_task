/* eslint-disable no-unused-vars */
import { FC } from 'react';
import MenuItems from '../MenuItems/MenuItems';
import styles from './SideMenu.module.scss';

interface ISideMenu {
  sideMenus: any[];
  onClick: (id: string) => void;
  selectedMenu?: boolean;
}

const SideMenu: FC<ISideMenu> = ({ sideMenus, onClick, selectedMenu }) => {
  return (
    <aside className={styles.sideMenuContainer}>
      {sideMenus?.map(({ country, events, id }: any) => (
        <MenuItems
          isActive={selectedMenu === id}
          key={id}
          onClick={() => onClick(id)}
        >
          {country} {events.length}
        </MenuItems>
      ))}
    </aside>
  );
};
SideMenu.defaultProps = {
  selectedMenu: false,
};

export default SideMenu;
