'use client'
import React from 'react';
import Image from 'next/image';
import styles from './TrustedPartners.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';


const TrustedPartners = () => {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{parse(i18n[language].partners.title)}</h1>
      <div className={styles.partnersLogo}>
        <Image className={styles.partner1} src="/img/partners/leadouze.jpg" 
          alt="Galerie A. LEADOUZE - Paris - Exposition permanente d'œuvres contemporaines - Vente sur rendez-vous" 
          width={200} height={100} />
        <Image className={styles.partner2} src="/img/partners/art_thema.jpg" 
          alt="Art Thema Gallery - Bruxelles - Partenaire exclusif InRealArt - Expertise et estimation d'œuvres d'art contemporain" 
          width={150} height={150} />
      </div>
    </div>
  );
};

export default TrustedPartners;