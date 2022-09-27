import MenuItems from '../MenuItems/MenuItems';
import styles from './SideMenu.module.scss';

const SideMenu = () => {
  return (
    <aside className={styles.sideMenuContainer}>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems isActive>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
      <MenuItems>Australia (15)</MenuItems>
    </aside>
  );
};

export default SideMenu;
