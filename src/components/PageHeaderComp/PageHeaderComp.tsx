import styles from './PageHeaderComp.module.scss';

const PageHeaderComp = () => {
  return (
    <div className={styles.PageHeaderComp}>
      <div className="PageIcon">
        <img
          className={styles.PageIcon}
          src="./static/images/HeaderIcon.png"
          alt="Page Icon"
        />
      </div>
    </div>
  );
};

export default PageHeaderComp;
