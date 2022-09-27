import { FC, ReactNode } from 'react';
import styles from './CardComponent.module.scss';

interface ICardComponent {
  children: ReactNode;
}

const CardComponent: FC<ICardComponent> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default CardComponent;
