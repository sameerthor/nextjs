
import Image from 'next/image';
import styles from './FeaturesBar.module.css';

// Images Import //
import findIcon from '../../public/assets/find-icon.webp';
import reviewIcon from '../../public/assets/review-icon.webp';
import shopIcon from '../../public/assets/shop-icon.webp';
import saveIcon from '../../public/assets/save-icon.webp';

const FEATURES_DATA = [
  {
    id: 'find',
    title: 'Find',
    description: 'Discover all emerging brands and shop best selling products.',
    icon: findIcon,
    accentClass: styles.findAccent
  },
  {
    id: 'review',
    title: 'Review',
    description: 'Read our unbiased reviews to make an informed choice.',
    icon: reviewIcon,
    accentClass: styles.reviewAccent
  },
  {
    id: 'shop',
    title: 'Shop',
    description: 'Get coupons, deals and offers for huge savings.',
    icon: shopIcon,
    accentClass: styles.shopAccent
  },
  {
    id: 'save',
    title: 'Save',
    description: 'Read reviews and save some cash.',
    icon: saveIcon,
    accentClass: styles.saveAccent
  }
];

export default function FeaturesBar() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={`${styles.iconWrapper} ${feature.accentClass}`}>
                <div className={styles.imageInner}>
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={32}
                    height={32}
                    className={styles.iconImage}
                  />
                </div>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}