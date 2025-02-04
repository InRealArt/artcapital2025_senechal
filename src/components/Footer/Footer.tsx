import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/inrealartgallery/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/instagram.jpg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://x.com/InRealArt" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/twitter.jpg" alt="Twitter" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;