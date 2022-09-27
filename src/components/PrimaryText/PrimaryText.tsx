import { FC, ReactNode } from 'react';
import styles from './PrimaryText.module.scss';

interface IPrimaryText {
  children: ReactNode;
}
const PrimaryText: FC<IPrimaryText> = ({ children }) => {
  return <p className={styles.primaryText}>{children}</p>;
};

export default PrimaryText;
