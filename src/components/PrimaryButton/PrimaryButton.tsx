import { FC, ReactNode } from 'react';
import styles from './PrimaryButton.module.scss';

interface IButton {
  children: ReactNode;
  onClick: any;
}

const PrimaryButton: FC<IButton> = ({ onClick, children }) => {
  return (
    <button type="button" className={styles.primaryButton} onClick={onClick}>
      {children}
    </button>
  );
};
export default PrimaryButton;
