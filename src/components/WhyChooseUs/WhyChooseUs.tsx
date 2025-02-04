'use client'
import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.scss';
import { CircleDollarSign, Gem, ThumbsUp } from 'lucide-react';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

const WhyChooseUs = () => {
  

  const { language, i18n } = useContext(I18nContext)
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{parse(i18n[language].whyChooseUS.title)}</h2>
      <div className={styles.subtitle}>
        {parse(i18n[language].whyChooseUS.subTitle)}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Gem size={20} color="black" />
          </div>

          <div className={styles.cardTitle}>{parse(i18n[language].whyChooseUS.cardTitle1)}</div>
          <div className={styles.cardText}>
            {parse(i18n[language].whyChooseUS.cardText1)}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <ThumbsUp size={20} color="black" />
          </div>
          <div className={styles.cardTitle}>{parse(i18n[language].whyChooseUS.cardTitle2)}</div>

          <div className={styles.cardText}>
            {parse(i18n[language].whyChooseUS.cardText2)}
          </div>  
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <CircleDollarSign size={20} color="black" />
          </div>
          <div className={styles.cardTitle}>{parse(i18n[language].whyChooseUS.cardTitle3)}</div>
          <div className={styles.cardText}>
            {parse(i18n[language].whyChooseUS.cardText3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;