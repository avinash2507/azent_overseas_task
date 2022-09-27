import { FC, ReactNode } from 'react';
import styles from './MenuItems.module.scss';

interface IMenuItem {
  children: ReactNode;
  isActive?: boolean;
}

const MenuItems: FC<IMenuItem> = ({ children, isActive }) => {
  return (
    <p className={`${styles.menuItemText} ${isActive && styles.isActive}`}>
      {children}
    </p>
  );
};
MenuItems.defaultProps = {
  isActive: false,
};

export default MenuItems;
