import React from 'react';
import Link from 'next/link';
import styles from './HandPicked.module.css';
import Image from 'next/image';

const allReviews = [
  // The Feature Story (The largest, anchor slot)
  {
    href: "/hanky-panky-review",
    imgSrc: "/images/hanky-panky.webp",
    alt: "hanky-panky",
    title: "The Comfort Revolution: Inside Hanky Panky's Made-In-USA Lingerie Lineup",
    category: "Premium Style",
    desc: "This lifestyle manufacturer offers a wide range of fashionable thongs, underwear, lingerie, and sleepwear proudly made in the U.S.A. Hanky Panky brings you beautiful engineering that looks undeniably elegant while prioritizing daily wearable comfort above all else."
  },
  // Side Rail Feed (Dense text feeds)
  {
    href: "/well-care-botanicals-review",
    title: "Well Care Botanicals Review: Botanical compounds designed for modern pain relief solutions.",
    category: "Wellness Tech"
  },
  {
    href: "/brown-and-ginger-review",
    title: "Brown and Ginger: Premium decor pieces to add intentional atmosphere to your living room space.",
    category: "Home Design"
  },
  {
    href: "/batanaful-review",
    title: "Batanaful Lineup: Reaching long-term skin goals naturally without reliance on synthetic additives.",
    category: "Clean Beauty"
  },
  {
    href: "/preloved-review",
    title: "Preloved Marketplace: Direct vendor-to-consumer pipelines redefine the local pickup process.",
    category: "Retail Trends"
  },
  // Bottom Editorial Grid Items
  {
    href: "/palladio-beauty-review",
    imgSrc: "/images/palladio.jpg",
    alt: "palladio",
    title: "Palladio Beauty Aims to Refine Botanical Cosmetics Infusions",
    category: "Skin Health",
    desc: "Focusing heavily on delivering organic skin-nourishing alternatives to combat modern environmental aging factors."
  },
  {
    href: "/zapaka-review",
    imgSrc: "/images/zapaka.webp",
    alt: "wellcare",
    title: "Vintage Boom: Inside Zapaka’s Explosive Market Growth Strategy",
    category: "Market Share",
    desc: "The vintage clothing brand turns heads with rapid catalog scaling and highly targeted digital community activations."
  },
  {
    href: "/good-clean-love-review",
    imgSrc: "/images/goodcleanlove.webp",
    alt: "goodcleanlove",
    title: "Good Clean Love Champions Intimate Body Defense Upgrades",
    category: "Personal Hygiene",
    desc: "A closer inspection at how their chemical-free barrier formulations safeguard complex biological matrices."
  },
  {
    href: "/moozii-review",
    imgSrc: "/images/moozii.webp",
    alt: "moozii",
    title: "Sustainable Care: How MOOZII Cuts Organic Luxury Base Costs",
    category: "Sustainability",
    desc: "Breaking down the raw material logistics helping this startup supply low-cost female health necessities."
  },
  {
    href: "/belly-bandits-review",
    imgSrc: "/images/bellibandit.webp",
    alt: "bellibandit",
    title: "Belly Bandit Secures FDA Classifications Across Maternity Portfolios",
    category: "Clinical Care",
    desc: "Analyzing the prenatal and postnatal healthcare devices stabilizing the modern transitional maternity market."
  }
];

export default function ForbesLayout() {
  const mainFeature = allReviews[0];
  const sideRailItems = allReviews.slice(1, 5);
  const bottomGridItems = allReviews.slice(5);

  return (
    <div className={styles.forbesWrapper}>
      <div className={styles.container}>
        
        {/* EDITORIAL BANNER */}
        <div className={styles.publicationHeader}>
          <div className={styles.leftLabel}>Discovered For You</div>
          <div className={styles.centerLine}></div>
          <div className={styles.rightLabel}>Market Insights 2026</div>
        </div>

        {/* TOP ROW: ASYMMETRIC FORBES HERO SPLIT */}
        <div className={styles.editorialHeroRow}>
          
          {/* Main Hero Column */}
          <div className={styles.heroLeftCol}>
            <Link href={mainFeature.href} className={styles.heroLinkBlock}>
              <div className={styles.heroImgContainer}>
                <Image 
                  src={mainFeature.imgSrc} 
                  alt={mainFeature.alt} 
                  width={700} 
                  height={450} 
                  priority 
                  className={styles.forbesImg}
                />
              </div>
              <div className={styles.heroTextContent}>
                <span className={styles.forbesCategoryTag}>{mainFeature.category}</span>
                <h2 className={styles.heroMainTitle}>{mainFeature.title}</h2>
                <p className={styles.heroSummaryText}>{mainFeature.desc}</p>
              </div>
            </Link>
          </div>

          {/* Right Column: Text-Only "Trending Lineup" Feed */}
          <div className={styles.heroRightCol}>
            <div className={styles.sideRailHeader}>
              <h3>Latest Reviews Feed</h3>
            </div>
            <div className={styles.sideRailList}>
              {sideRailItems.map((item, idx) => (
                <Link key={idx} href={item.href} className={styles.sideRailCard}>
                  <span className={styles.railLabel}>{item.category}</span>
                  <h4 className={styles.railTitle}>{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* MID SECTION DIVIDER */}
        <div className={styles.editorialBreak}>
          <span>More Market Intelligence</span>
        </div>

        {/* BOTTOM ROW: MULTI-COLUMN STREAM */}
        <div className={styles.streamGridRow}>
          {bottomGridItems.map((item, idx) => (
            <div key={idx} className={styles.streamColumn}>
              <Link href={item.href} className={styles.streamInlineCard}>
                <div className={styles.streamImgWrap}>
                  <Image 
                    src={item.imgSrc} 
                    alt={item.alt} 
                    width={350} 
                    height={220} 
                    className={styles.forbesImg}
                  />
                </div>
                <div className={styles.streamContentWrap}>
                  <span className={styles.forbesCategoryTagSmall}>{item.category}</span>
                  <h3 className={styles.streamCardTitle}>{item.title}</h3>
                  <p className={styles.streamCardDesc}>{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}