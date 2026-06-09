import React from 'react';
import styles from './ReviewHero.module.css';

const featuredStories = [
  {
    href: "/clinique-review",
    imgSrc: "https://scoopreview.com/images/review-logo/ikaria-beauty-review.webp",
    category: "Health And Wellness",
    title: "Clinique Review: Scientific Backing, Real Results",
    desc: "Clinique has grown over the years while remaining faithful to its basic ideas, developing products with scientific support that deliver substantial effects without causing irritation.",
    date: "January 22, 2024"
  },
  {
    href: "/fitphyt-discount-code",
    imgSrc: "https://scoopreview.com/wp-content/uploads/2019/09/Fitphyt-Coupons.jpg",
    category: "Lifestyle",
    title: "Fitphyt Discount: Branded Activewear Built Comfortably",
    desc: "Fitphyt is known to offer branded quality leggings that are super comfortable and extremely resistant. The fabric is fantastic that allows you to wear them on any occasion.",
    date: "January 10, 2024"
  },
  {
    href: "/fruit-bouquets-review",
    imgSrc: "https://scoopreview.com/wp-content/uploads/2022/04/Fluttering-Fruit-Arrangement-Review.jpg",
    category: "Food & Drinks",
    title: "Fruit Bouquets: Curated Floral and Gourmet Treats",
    desc: "Fruit Bouquets is a brand that offers an endless collection of beautifully presented fruits and flowers perfect for any landmark occasion.",
    date: "March 10, 2024"
  }
];

const latestFinds = [
  {
    href: "/anact-review",
    imgSrc: "/images/anact.webp",
    title: "Anact Reviews: Best Hemp-Based Towel And Face Masks",
    date: "September 12, 2025"
  },
  {
    href: "/affirmicious-review",
    imgSrc: "/images/affirmicious.webp",
    title: "Affirmicious Reviews | Best Astrology And Zodiac Positive Affirmations",
    date: "October 14, 2025"
  },
  {
    href: "/indochino-review",
    imgSrc: "/images/indochino.avif",
    title: "Indochino Review | Best Custom Suits, Shirts, Chinos, And More",
    date: "September 14, 2025"
  },
  {
    href: "/vellen-hair-review",
    imgSrc: "/images/vellen-hair.webp",
    title: "Vellen-Hair Reviews | Best Hair Highlighting Comb Set",
    date: "November 14, 2025"
  }
];

export default function ReviewHero() {
  const mainStory = featuredStories[0];
  const subStories = featuredStories.slice(1);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.editorialGrid}>
          
          {/* LEFT COLUMN: Featured Spotlight */}
          <div className={styles.leftColumn}>
            <div>
              <div className={styles.spotlightHeader}>
                <span className={styles.spotlightTag}>Featured Spotlight</span>
                <div className={styles.lineDivider}></div>
              </div>

              <a href={mainStory.href} className={styles.mainHeroCard}>
                <div className={styles.heroImageWrapper}>
                  <img src={mainStory.imgSrc} alt={mainStory.title} />
                </div>
                <span className={styles.categoryTag}>{mainStory.category}</span>
                <h3 className={styles.heroTitle}>{mainStory.title}</h3>
                <p className={styles.heroDesc}>{mainStory.desc}</p>
                <span className={styles.dateStamp}>{mainStory.date}</span>
              </a>
            </div>

            <div className={styles.subFeaturesGrid}>
              {subStories.map((story, idx) => (
                <a href={story.href} key={idx} className={styles.subCard}>
                  <div className={styles.subImageWrapper}>
                    <img src={story.imgSrc} alt={story.title} />
                  </div>
                  <span className={styles.categoryTagSmall}>{story.category}</span>
                  <h4 className={styles.subTitle}>{story.title}</h4>
                  <span className={styles.dateStamp}>{story.date}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Latest Finds Stream */}
          <div className={styles.rightColumn}>
            <div className={styles.feedHeader}>
              <h2 className={styles.feedHeading}>Latest Finds</h2>
              <div className={styles.feedLineDivider}></div>
            </div>

            <div className={styles.feedList}>
              {latestFinds.map((find, idx) => (
                <a href={find.href} key={idx} className={styles.feedItem}>
                  <div className={styles.thumbWrapper}>
                    <img src={find.imgSrc} alt={find.title} />
                  </div>
                  <div className={styles.feedTextContainer}>
                    <h3 className={styles.feedItemTitle}>{find.title}</h3>
                    <span className={styles.dateStamp}>{find.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}