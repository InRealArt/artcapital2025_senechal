'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';


const Testimonials = () => {

  const { language, i18n } = useContext(I18nContext)
  
  return (

  <div className={styles.container}>
    <div className={styles.wrapperText}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{parse(i18n[language].testimonials.title)}</div>
      </div>
    </div>
    <div className={styles.containerTestimonials}>
      <div className={styles.containerTestimonial1}>
        <Image src="/img/testimonials/nadine_leprince.jpg" 
          alt="Nadine Le Prince - Artiste contemporaine - Témoignage sur InRealArt" 
          width={150} height={150} className={styles.testimonialImage} />
        <div className={styles.wrapperText2}>
          <div className={styles.title2}>
            <div className={styles.artist1}>{parse(i18n[language].testimonials.artistName1)}</div>
          </div>
          <div className={styles.artistText1}>
              <span className={styles.artistText11}>
                {parse(i18n[language].testimonials.artist1)}
              </span>
              <span className={styles.artistText13}>{parse(i18n[language].testimonials.styleArtist1)}</span>
              &nbsp;&nbsp;
              <span
                className={styles.artistText14}>
                {parse(i18n[language].testimonials.rankingArtist1)}
              </span>
          </div>
        </div>
      </div>
      <div className={styles.containerTestimonial2}>
        <Image src="/img/testimonials/leloluce.jpg" 
          alt="Leloluce - Artiste contemporain TOP 7 I-CAC - Témoignage sur InRealArt"
          width={150} height={150} className={styles.testimonialImage}/>
        <div className={styles.wrapperText3}>
          <div className={styles.title2}>
            <div className={styles.artist2}>{parse(i18n[language].testimonials.artistName2)}</div>
          </div>
          <div 
            className={styles.artistText2}>
            <span>
              <span className={styles.artistText21}>
                {parse(i18n[language].testimonials.artist2)}
              </span>
              <span className={styles.artistText22}> {parse(i18n[language].testimonials.styleArtist2)}</span>
              &nbsp;&nbsp;
              <span className={styles.artistText23}>
                {parse(i18n[language].testimonials.rankingArtist2)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Testimonials;