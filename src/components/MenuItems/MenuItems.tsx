/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactNode } from 'react';
import styles from './MenuItems.module.scss';

interface IMenuItem {
  children: ReactNode;
  isActive?: boolean;
  onClick: any;
}

const MenuItems: FC<IMenuItem> = ({ children, isActive, onClick }) => {
  return (
    <p
      className={`${styles.menuItemText} ${isActive && styles.isActive}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};
MenuItems.defaultProps = {
  isActive: false,
};

export default MenuItems;
