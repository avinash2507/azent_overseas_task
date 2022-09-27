import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [eventList, setEventList] = useState([]);

  const getSideMenus = async () => {
    try {
      const res = await fetch('http://localhost:3000/CountryEvents.json');
      const data = await res.json();
      return setSideMenus(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSideMenus();
  }, []);
  const handleEventList = (menuId: any) => {
    const selectedMenuData: any = sideMenus.find(
      (sideMenu: any) => sideMenu.id === menuId,
    );
    setEventList(selectedMenuData?.events);
  };
  useEffect(() => {
    if (selectedMenu) handleEventList(selectedMenu);
  }, [selectedMenu]);

  const handleIsSelected = (id: any) => setSelectedMenu(id);

  return (
    <div id="home_page" className={styles.homepageContainer}>
      <h1 className={styles.mainHeading}>Explore Our Events</h1>
      <div className={styles.homePageContent}>
        <SideMenu
          onClick={handleIsSelected}
          selectedMenu={selectedMenu}
          sideMenus={sideMenus}
        />

        <div className={styles.productCards}>
          {eventList?.map((eve: any) => (
            <ProductCard key={eve?.id} {...eve} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
