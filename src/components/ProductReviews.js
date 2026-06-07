import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductReviews.module.css';

// Images Import //

import BathnBodyImage from '../../public/assets/Bath-n-Body-Works.webp';
import ebayImage from '../../public/assets/Ebay.webp';
import fruitBuqet from '../../public/assets/Fruit-Bouquet.webp';
import SallyImage from '../../public/assets/Sally.webp';
import ultrabeauty from '../../public/assets/ulta-beauty.webp';
const REVIEWS_DATA = [
    {
    id: 'sally-beauty',
    href: '/sally-beauty-review',
    categoryHref: '/review-category/health-and-wellness',
    categoryName: 'Health & Wellness',
    title: 'Sally Beauty Review',
    description: 'Sally Beauty Supply and Beauty Systems Group has',
    image: SallyImage
  },
  {
    id: 'ulta-beauty',
    href: '/ulta-beauty-review',
    categoryHref: '/review-category/health-and-wellness',
    categoryName: 'Health & Wellness',
    title: 'Ulta Beauty Review',
    description: 'Ulta Beauty acts as your one-stop-shop for exploring',
    image: ultrabeauty
  },  
  {
    id: 'bath-and-body',
    href: '/bath-and-body-works-review',
    categoryHref: '/review-category/health-and-wellness',
    categoryName: 'Health & Wellness',
    title: 'Bath & Body Review',
    description: 'Bath & Body Works provides you with ample choices for choosing the right skincare products for your body',
    image: BathnBodyImage
  },
  {
    id: 'ebay',
    href: '/ebay-review',
    categoryHref: '/review-category/e-commerce',
    categoryName: 'E-Commerce',
    title: 'Ebay Review',
    description: 'Ebay is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world',
    image: ebayImage
  },
  {
    id: 'fruit-bouquets',
    href: '/fruit-bouquets-review',
    categoryHref: '/review-category/food-drinks',
    categoryName: 'Food & Drinks',
    title: 'Fruit Bouquets Review',
    description: 'If you are looking for an alternative to showpieces or high sugar',
    image: fruitBuqet
  }
];

export default function ProductReviews() {
  // Slicing out items for the asymmetric 1 + (2x2) editorial layout
  const heroReview = REVIEWS_DATA[0];
  const subGridReviews = REVIEWS_DATA.slice(1, 5);
  const regularRowReviews = REVIEWS_DATA.slice(5);

  const renderReviewCard = (item, variantClass = '') => {
    if (!item) return null;
    return (
      <article className={`${styles.reviewCard} ${variantClass}`} key={item.id}>
        <div className={styles.imageContainer}>
          <Link prefetch={false} href={item.href} className={styles.imageLink}>
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.cardImage}
            />
          </Link>
        </div>

        <div className={styles.cardBody}>
          <span className={styles.categoryBadge}>
            <Link prefetch={false} href={item.href}>
              {item.categoryName}
            </Link>
          </span>

          <h3 className={styles.cardTitle}>
            <Link prefetch={false} href={item.href}>
              {item.title}
            </Link>
          </h3>

          <p className={styles.cardText}>
            {item.description}{' '}
            <Link prefetch={false} href={item.href} className={styles.readMore}>
              read more
            </Link>
          </p>
        </div>
      </article>
    );
  };

  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        <h2 class="section-title text-center">Best Product Reviews</h2>

        {/* --- Premium Editorial Asymmetric Rows Layout Block --- */}
        <div className={styles.editorialGrid}>
          
          {/* Left Column: Big Epic Hero Feature Card */}
          {heroReview && (
            <div className={styles.heroColumn}>
              {renderReviewCard(heroReview, styles.heroCard)}
            </div>
          )}

          {/* Right Column: 2 Columns wide x 2 Rows high Inner Grid */}
          <div className={styles.subGridColumn}>
            {subGridReviews.map((item) => 
              renderReviewCard(item, styles.compactCard)
            )}
          </div>
          
        </div>

        {/* --- Bottom Base Grid Row: for remaining items (6th item onwards) --- */}
        {regularRowReviews.length > 0 && (
          <div className={styles.regularGrid}>
            {regularRowReviews.map((item) => 
              renderReviewCard(item, styles.baseCard)
            )}
          </div>
        )}

      </div>
    </section>
  );
}