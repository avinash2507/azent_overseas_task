/* eslint-disable no-param-reassign */
import dayjs from 'dayjs';
import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import CardHeading from '../CardHeading/CardHeading';
import CardTiming from '../CardTiming/CardTiming';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import PrimaryText from '../PrimaryText/PrimaryText';
import styles from './ProductCard.module.scss';

const ProductCard = ({ heading, image_url, timeStamp, meeting_type }: any) => {
  const meetingDate = dayjs(timeStamp * 1000).format('MMM D, YYYY');
  const meetingTime = dayjs(timeStamp * 1000).format('hh:m A');

  return (
    <section className={styles.productCardContainer}>
      <CardComponent>
        <img
          src={image_url}
          loading="lazy"
          onError={({ currentTarget }: any) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = './static/images/bg1.png';
          }}
          alt="Product Card"
          className={styles.cardImage}
        />
        <div className={styles.cardFooter}>
          <CardHeading>{heading}</CardHeading>
          <PrimaryText>{meetingDate}</PrimaryText>
          <CardTiming>
            {meeting_type} | {meetingTime}
          </CardTiming>
          <PrimaryButton onClick={() => {}}>Register now</PrimaryButton>
        </div>
      </CardComponent>
    </section>
  );
};

export default ProductCard;
