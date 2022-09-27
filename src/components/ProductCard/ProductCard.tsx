import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import CardHeading from '../CardHeading/CardHeading';
import CardTiming from '../CardTiming/CardTiming';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import PrimaryText from '../PrimaryText/PrimaryText';
import styles from './ProductCard.module.scss';

const ProductCard = ({ heading, imageUrl, timeStamp, meeting_type }: any) => {
  return (
    <section className={styles.productCardContainer}>
      <CardComponent>
        <img
          src={imageUrl || './static/images/bg1.png'}
          alt="Product Card"
          className={styles.cardImage}
        />
        <div className={styles.cardFooter}>
          <CardHeading>{heading}</CardHeading>
          <PrimaryText>{timeStamp}</PrimaryText>
          <CardTiming>{meeting_type} | 02:00 PM</CardTiming>
          <PrimaryButton onClick={() => {}}>Register now</PrimaryButton>
        </div>
      </CardComponent>
    </section>
  );
};

export default ProductCard;
