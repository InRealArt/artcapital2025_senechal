import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <Image src="/img/header/iraLogo.jpg" alt="YouTube" width={65} height={65} />
        </div>
        <div className={styles.logoWrapper}>
          <Image src="/img/header/IRA.png" alt="IRA" width={60} height={50} />
        </div>
      </div>
    </div>
  );
}