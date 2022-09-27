import { FC, ReactNode } from 'react';
import styles from './CardHeading.module.scss';

interface ICardHeading {
  children: ReactNode;
}

const CardHeading: FC<ICardHeading> = ({ children }) => {
  return <h2 className={styles.cardHeading}>{children}</h2>;
};

export default CardHeading;
