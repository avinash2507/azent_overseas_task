import ProductCard from '../../components/ProductCard/ProductCard';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div id="home_page" className={styles.homepageContainer}>
      <h1 className={styles.mainHeading}>Explore Our Events</h1>
      <div className={styles.homePageContent}>
        <SideMenu />
        <div className={styles.productCards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
