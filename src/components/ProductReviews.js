import React from 'react';
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
    title: 'Sally Beauty Supply and Beauty Systems Group: Navigating Modern Retail Cosmetics Ecosystems',
    description: 'Sally Beauty Supply and Beauty Systems Group has continued to scale operations across commercial networks, offering professional grade styling access directly to residential consumers.',
    image: SallyImage
  },
  {
    id: 'ulta-beauty',
    href: '/ulta-beauty-review',
    categoryHref: '/review-category/health-and-wellness',
    categoryName: 'Health & Wellness',
    title: 'Ulta Beauty Acts As Your One-Stop-Shop For Exploring Global Luxury Cosmetic Formulations',
    description: 'Ulta Beauty acts as your one-stop-shop for exploring custom wellness products, merging drugstore accessible item streams with prestige international department lines flawlessly.',
    image: ultrabeauty
  },  
  {
    id: 'bath-and-body',
    href: '/bath-and-body-works-review',
    categoryHref: '/review-category/health-and-wellness',
    categoryName: 'Health & Wellness',
    title: 'Bath & Body Works Provides Premium Strategies For Optimizing Clean Skin Regimens',
    description: 'Bath & Body Works provides you with ample choices for choosing the right skincare products for your body.',
    image: BathnBodyImage
  },
  {
    id: 'ebay',
    href: '/ebay-review',
    categoryHref: '/review-category/e-commerce',
    categoryName: 'E-Commerce',
    title: 'Ebay Review: Global Commerce Leaders Redefining Decentralized Consumer Logistics Networks',
    description: 'Ebay is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world.',
    image: ebayImage
  },
  {
    id: 'fruit-bouquets',
    href: '/fruit-bouquets-review',
    categoryHref: '/review-category/food-drinks',
    categoryName: 'Food & Drinks',
    title: 'Fruit Bouquets Explores Elegant Curated Organic Presentation Options Outside Traditional Gift Market Spheres',
    description: 'If you are looking for an alternative to showpieces or high sugar alternatives, these fresh arrangements are capturing major traction.',
    image: fruitBuqet
  }
];

export default function ProductReviews() {
  // Forbes Layout Distribution:
  // 1 Primary Visual Feature
  const mainFeature = REVIEWS_DATA[0];
  // 2 Inline Visual Secondary Columns
  const dynamicStreamItems = REVIEWS_DATA.slice(1, 3);
  // 2 Pure Text Editorial Stream Rail Feeds
  const sideRailItems = REVIEWS_DATA.slice(3, 5);

  return (
    <section className={styles.forbesSectionWrapper}>
      <div className={styles.container}>
        
        {/* EDITORIAL PUBLICATION HEADER */}
        <div className={styles.editorialHeaderFrame}>
          <span className={styles.leftMetaLabel}>Best Product Reviews</span>
          <div className={styles.centerDividerStripe}></div>
          <span className={styles.rightMetaLabel}>Premium Intelligence 2026</span>
        </div>

        {/* PRIMARY ASYMMETRIC MAIN GRID STAGE */}
        <div className={styles.editorialMainRow}>
          
          {/* LEFT AREA: MAIN DOMINANT FEATURE */}
          {mainFeature && (
            <div className={styles.primaryFeatureHero}>
              <article className={styles.heroArticle}>
                <Link href={mainFeature.href} className={styles.heroBlockLink}>
                  <div className={styles.heroImageFrame}>
                    <Image 
                      src={mainFeature.image} 
                      alt={mainFeature.title}
                      fill
                      priority
                      sizes="(max-width: 992px) 100vw, 65vw"
                      className={styles.editorialImageElement}
                    />
                  </div>
                  <div className={styles.heroTextContent}>
                    <span className={styles.categoryEditorialTag}>{mainFeature.categoryName}</span>
                    <h1 className={styles.heroHeadlineTitle}>{mainFeature.title}</h1>
                    <p className={styles.heroSummaryParagraph}>
                      {mainFeature.description}
                      <span className={styles.editorialReadMore}> Read Full Evaluation</span>
                    </p>
                  </div>
                </Link>
              </article>
            </div>
          )}

          {/* RIGHT AREA: THE PURE EDITORIAL TEXT WIRE */}
          <div className={styles.sideTickerRail}>
            <div className={styles.tickerHeaderTitle}>
              <h3>Market Focus Feed</h3>
            </div>
            <div className={styles.tickerStreamList}>
              {sideRailItems.map((item) => (
                <article key={item.id} className={styles.tickerFeedCard}>
                  <Link href={item.categoryHref} className={styles.tickerCategoryTag}>
                    {item.categoryName}
                  </Link>
                  <h4 className={styles.tickerCardTitle}>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </h4>
                  <p className={styles.tickerBriefDesc}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION SPLIT SEPARATOR STRIP */}
        <div className={styles.horizontalBreakStripe}>
          <span>Strategic Trends Stream</span>
        </div>
        {/* BOTTOM LAYER: TWO-COLUMN DEEP HOVER STREAM CARDS */}
        <div className={styles.bottomSecondaryGrid}>
          {dynamicStreamItems.map((item) => (
            <div key={item.id} className={styles.secondaryGridColumn}>
              <article className={styles.streamInlineHorizontalCard}>
                
                <div className={styles.streamImageContainer}>
                  <Link href={item.href} className={styles.streamImageLink}>
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className={styles.editorialImageElement}
                    />
                  </Link>
                </div>

                <div className={styles.streamTextContainer}>
                  <span className={styles.categoryEditorialTagSmall}>{item.categoryName}</span>
                  <h3 className={styles.streamCardTitle}>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className={styles.streamCardParagraph}>
                    {item.description}
                  </p>
                </div>

              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}