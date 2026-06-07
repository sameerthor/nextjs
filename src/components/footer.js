'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import getConfig from 'next/config';
import styles from './Footer.module.css';

const { publicRuntimeConfig } = getConfig() || {};

export function Footer() {
  const pathname = usePathname();

  // Helper method to assign interactive active color values smoothly
  const getLinkClass = (href) => {
    return pathname === href 
      ? `${styles.footerLink} ${styles.activeLink}` 
      : styles.footerLink;
  };

  return (
    <footer className={styles.footerWrapper}>
      {/* --- Main Content Grid Container --- */}
      <div className={styles.mainContainer}>
        <div className={styles.footerGrid}>
          
          {/* Brand Profile Block */}
          <div className={styles.brandColumn}>
            <h4 className={styles.brandLogo}>
              Scoop<span>Review</span>
            </h4>
            <p className={styles.brandDescription}>
              At ScoopReview, we want to be your one-stop-shop for wide, in-depth 
              product reviews of the top brands on the market while pointing you 
              to the best prices on the internet.
            </p>
          </div>

          {/* Column 1: Navigation Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnHeading}>Navigations</h3>
            <ul className={styles.linksList}>
              <li>
                <Link prefetch={false} className={getLinkClass('/')} href="/" shallow={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/about')} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/blogs')} href="/blogs" shallow={true}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/faqs')} href="/faqs">
                  Faqs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnHeading}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li>
                <Link prefetch={false} className={getLinkClass('/reviews')} href="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/categories')} href="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/contact')} href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/affiliate-disclosure')} href="/affiliate-disclosure">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnHeading}>Need Help?</h3>
            <ul className={styles.linksList}>
              <li>
                <Link prefetch={false} className={getLinkClass('/privacy-policy')} href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/cookie-policy')} href="/cookie-policy">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link prefetch={false} className={getLinkClass('/terms-of-use')} href="/terms-of-use">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- Separate Legals & Copyright Basebar --- */}
      <div className={styles.copyrightBar}>
        <div className={styles.mainContainer}>
          <p className={styles.disclaimerText}>
            ScoopReview earns affiliate commissions on qualifying purchases as an Amazon Associate. 
            "Amazon, and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates."
          </p>
          <p className={styles.copyrightText}>
            Copyright &copy; {new Date().getFullYear()} ScoopReview. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;