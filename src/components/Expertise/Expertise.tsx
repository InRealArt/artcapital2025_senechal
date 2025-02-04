'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Expertise.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';


const Expertise = () => {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.container}>
      <img className={styles.expert} src="/img/expertise/c_meulemans.png" />
      <div className={styles.containerExpert}>
        <div className={styles.expertTitleWords}>
          <div className={styles.expertTitle}>{parse(i18n[language].expert.title)}</div>
          <div className={styles.expertWords}>
            {parse(i18n[language].expert.words)}
          </div>
        </div>
        <div className={styles.identityExpertContainer}>
          <div className={styles.identityExpert}>
            {parse(i18n[language].expert.name)}
            <br />
            {parse(i18n[language].expert.role)}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Expertise;