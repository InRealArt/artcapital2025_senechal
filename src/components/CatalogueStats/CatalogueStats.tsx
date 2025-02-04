'use client'
import React from 'react';
import styles from './CatalogueStats.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

const CatalogueStats = () => {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{parse(i18n[language].stats.title)}</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>15 +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat11)}</span>
            <br></br><br></br>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>&lt; 100</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat21)}</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>1000  +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat31)}</span>
            <br></br><br></br>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumberBig}>50 %</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat41)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueStats;