'use client'
import styles from './EventInfo.module.scss';
import Link from "next/link";
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';


export default function EventInfo() {
  const { language, i18n } = useContext(I18nContext)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    const targetElement = document.getElementById(targetId || '');
    
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.eventInfoContainer}>
      <div className={styles.eventInfoItem1}>
        <h2 className={styles.title}>
          {parse(i18n[language].eventInfo.title)}
        </h2>
      </div>
      <div className={styles.eventInfoItem2}>
        <p className={styles.date}>{parse(i18n[language].eventInfo.date)}</p>
        <p className={styles.date}>{parse(i18n[language].eventInfo.place)}</p>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonText}>
          <Link href={`#catalogueRequest`} onClick={handleClick}>
            {parse(i18n[language].eventInfo.button)}
          </Link>  
        </div>
      </div>
    </div>
  );
}