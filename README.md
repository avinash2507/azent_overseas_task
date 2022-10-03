# Project Title

EVENT REMAINDER :

## Description

Through this project, we can keep a reminder about the event with our company and where and how we can join the event, we can also go to make the meeting better. TypeScript has been used very well in this project and we can use reactRedux Tool kit to improve it.

## Getting Started

First of all I have installed all the dependencies used in it which will be found in JSON file. After that, by separating the whole site into different components, all the components have been made very slowly, I have used tpascript to avoid test cases

### Dependencies

- "dependencies": {
  "@testing-library/jest-dom": "^5.16.5",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "@types/jest": "^27.5.2",
  "@types/node": "^16.11.62",
  "@types/react": "^17.0.2",
  "@types/react-dom": "^17.0.2",
  "dayjs": "^1.11.5",
  "prettier": "^2.7.1",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-scripts": "5.0.1",
  "sass": "^1.55.0",
  "typescript": "^4.8.3",
  "web-vitals": "^2.1.4"
  },

### Installing

npx create-react-app my-app --template typescript
yarn create react-app my-app --template typescript

npm install --save-dev --save-exact prettier

<!-- For better formatting of our code, we have also installed Prettier, so that we can show the code pretty easily. -->

### Executing program

- How to run the program
  <!-- yarn start after installing all dependencies  -->

  we can enter the command in terminal pannel
  yarn start
  npm start

- Step-by-step bullets

```
const HomePage = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [eventList, setEventList] = useState([]);
  const selectedId = 2;
  const handleIsSelected = (id: any) => setSelectedMenu(id);

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
```

## Help

Any advise for common problems or issues.

```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

Avinash Vishwakarma
Github Account : https://github.com/avinash2507

## Version History

- 0.2
  "@types/jest": "^27.5.2",
  "@types/node": "^16.11.62",
  "@types/react": "^17.0.2",
  "@types/react-dom": "^17.0.2",
  "dayjs": "^1.11.5",
  "prettier": "^2.7.1",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-scripts": "5.0.1",
  "sass": "^1.55.0",
  "typescript": "^4.8.3",
- 0.1
  - Initial Release

## License

This project is licensed under the [AVINASH] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [avinash](https://gist.github.com/avinash2507)
