import Image from 'next/image';
import styles from './ImageGrid.module.scss';

export default function ImageGrid() {
  const images = [
    'ma_provence.jpg',
    'luberon.jpg',
    'jeudi_noir.jpg',
    'le_dernier_glacier.jpg',
    'les_faucheurs_de_la_sorgue.jpg',
    'les_enfants_de_la_paix.jpg',
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