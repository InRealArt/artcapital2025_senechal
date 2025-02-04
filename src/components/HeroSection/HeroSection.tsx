"use client";

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import ImageGrid from './ImageGrid';

export default function HeroSection() {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.header}>
      <ImageGrid/>

      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
              src="/img/heroSection/logo_artcapital2025.png"
              alt="ArtCapital Logo"
              width={400}
              height={400}
              priority
            />
        </div>
        <div className={styles.title}>
          {i18n[language].hero.title}
        </div>
      </div>
    </div>
  );
}