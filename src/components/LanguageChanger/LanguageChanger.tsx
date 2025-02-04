'use client';

import { I18nContext } from "@/i18n-context";
import { useContext } from "react";
import styles from './LanguageChanger.module.scss';


export default function LanguageChanger() {
  const { setLanguage, language } = useContext(I18nContext);
	const handleChange = (e: any) => {    
		setLanguage(e.target.value);
	};

  return (
    <select className={styles.switch} value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">Francais</option>
    </select>
  );
}