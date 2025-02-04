import Image from 'next/image';
import styles from './ImageGrid.module.scss';

export default function ImageGrid() {
  const images = [
    'senechal1.jpg',
    'senechal2.jpg',
    'senechal3.jpg',
    'senechal4.jpg',
    'senechal5.jpg',
    'senechal6.jpg',
  ];

  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={`/img/heroSection/${image}`}
            alt={`Œuvre d'art de Monique Laville - Collection 2025 - Pièce ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}