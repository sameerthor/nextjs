import React from 'react';
import styles from './ReviewHero.module.css';

const featuredStories = [
  {
    href: "/anact-review",
    imgSrc: "/images/anact.webp",
    category: "Beauty",
    title: "Anact Review: Best Hemp-Based Towel And Face Masks",
    desc: "Anact has grown over the years while remaining faithful to its basic ideas, developing products with scientific support that deliver substantial effects without causing irritation.",
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
    href: "/clinique-review",
    imgSrc: "/assets/clinique.webp",
    title: "Clinique: Scientific Backing, Real Results",
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
  },
  {
    href: "/myles-apparel-review", 
    imgSrc: "/images/myles.webp",
    title: "Myles Apparel is a well-recognized brand in the mes’ garments and accessories industry.",
    date: "November 12, 2024"
  },
  {
    href: "/palladio-beauty-review", 
    imgSrc: "/images/palladiobeauty.webp",
    title: "Palladio Beauty Reviews 2026 | Best Quality Lip Products At Palladio Beauty",
    date: "April 10, 2025"
  },
  {
    href: "/adorime-review", 
    imgSrc: "/images/aldorime.avif",
    title: "Adorime Reviews 2026 | Best Adult Sex Toy For Satisfied Sexual Life",
    date: "Feb 14, 2026"
  },
  {
    href: "/fleshlight-review", 
    imgSrc: "/images/imbesharam.png",
    title: "Fleshlight Reviews 2026 | Best Adult Sex Toys & Male Pleasure Products",
    date: "April 8, 2026"
  },
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