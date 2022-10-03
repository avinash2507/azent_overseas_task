/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import PageHeaderComp from '../../components/PageHeaderComp/PageHeaderComp';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [eventList, setEventList] = useState([]);
  const selectedId = 2;
  const handleIsSelected = (id: any) => setSelectedMenu(id);

  const getSideMenus = async () => {
    try {
      const res = await fetch('./CountryEvents.json');
      const data = await res.json();

      return setSideMenus(data);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getSideMenus();
      handleIsSelected(selectedId);
    })();
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

  return (
    <div id="home_page" className={styles.homepageContainer}>
      <PageHeaderComp />
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
