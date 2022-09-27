import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import CardHeading from '../CardHeading/CardHeading';
import CardTiming from '../CardTiming/CardTiming';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import PrimaryText from '../PrimaryText/PrimaryText';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <section className={styles.productCardContainer}>
      <CardComponent>
        <img
          src="./static/images/bg1.png"
          alt="Product Card"
          className={styles.cardImage}
        />
        <div className={styles.cardFooter}>
          <CardHeading>
            Azent Overseas Education Online Fair - Australia
          </CardHeading>
          <PrimaryText>10th May 2022</PrimaryText>
          <CardTiming>Zoom meet | 02:00 PM</CardTiming>
          <PrimaryButton onClick={() => {}}>Register now</PrimaryButton>
        </div>
      </CardComponent>
    </section>
  );
};

export default ProductCard;
