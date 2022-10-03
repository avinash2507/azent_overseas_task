import { useEffect, useState } from 'react';

interface ISide {
  id: any;
  events: any[];
}
export const useProduct = () => {
  const [sideMenus, setSideMenus] = useState<ISide[]>([]);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [eventList, setEventList] = useState<any>([]);

  const getSideMenus = async () => {
    try {
      const res = await fetch('http://localhost:3000/CountryEvents.json');
      const data = await res.json();
      return setSideMenus(data);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getSideMenus();
  }, []);
  const handleEventList = (menuId: any) => {
    const selectedMenuData: ISide | undefined = sideMenus.find(
      (sideMenu: ISide) => sideMenu.id === menuId,
    );
    const arr: any = selectedMenuData?.events;
    setEventList([...arr]);
  };
  useEffect(() => {
    if (selectedMenu) handleEventList(selectedMenu);
  }, [selectedMenu]);

  const handleIsSelected = (id: any) => setSelectedMenu(id);

  return { sideMenus, selectedMenu, ev: eventList, handleIsSelected };
};
