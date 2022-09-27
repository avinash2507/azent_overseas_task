import { FC, ReactNode } from 'react';
import styles from './CardTiming.module.scss';

interface ICardTiming {
  children: ReactNode;
}
const CardTiming: FC<ICardTiming> = ({ children }) => {
  return <div className={styles.cardTimingContainer}>{children}</div>;
};

export default CardTiming;
