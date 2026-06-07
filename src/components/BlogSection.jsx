import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogSection.module.css';

const AUTHOR_NAME = 'Tanay Saxena';
const EXCERPT_LENGTH = 200;
const TITLE_LENGTH = 55;

const stripHtml = (value = '') => value.replace(/(<([^>]+)>)/gi, '').trim();

const truncateText = (value = '', limit) => {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit).trim()}...`;
};

const getBlogUrl = (slug) => (slug ? `/${slug}` : '/blogs');
const getImageUrl = (imageBaseUrl = '', image) => `${imageBaseUrl}images/${image}`;

export default function BlogSection({ blogs = [], imageBaseUrl = '' }) {
  const hasBlogs = Array.isArray(blogs) && blogs.length > 0;

  if (!hasBlogs) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          
          <p className={styles.noBlogs}>No recent articles found. Check back soon!</p>
        </div>
      </section>
    );
  }

  // Segment our array to handle the magazine editorial showcase layout smoothly
  const featureSectionBlogs = blogs.slice(0, 5);
  const regularRowBlogs = blogs.slice(5);

  // Reusable render card helper block to maintain consistency across layout sizes
  const renderCard = (item, index, cardVariantClass = '') => {
    if (!item) return null;
    const blogLink = getBlogUrl(item.slug);
    const excerpt = stripHtml(item.content);
    const title = item.title || 'Untitled Post';
    const itemKey = item.id || item.slug || `blog-${index}`;

    return (
      <article className={`${styles.blogCard} ${cardVariantClass}`} key={itemKey}>
        <Link prefetch={false} href={blogLink} className={styles.imageWrapper}>
          {item.image ? (
            <Image
              src={getImageUrl(imageBaseUrl, item.image)}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.cardImage}
            />
          ) : (
            <span className={styles.imagePlaceholder}>ScoopReview</span>
          )}
        </Link>

        <div className={styles.cardContent}>
          {item.category && <span className={styles.category}>{item.category}</span>}

          <h2 className={styles.title}>
            <Link prefetch={false} href={blogLink}>{truncateText(title, TITLE_LENGTH)}</Link>
          </h2>

          <p className={styles.description}>
            {truncateText(excerpt, EXCERPT_LENGTH) || 'Read more about this article.'}
          </p>

          <div className={styles.authorSection}>
            <div className={styles.authorInfo}>
              By <Link prefetch={false} href={blogLink} className={styles.authorName}>{AUTHOR_NAME}</Link>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* <h1 className={styles.heading}>Latest Blogs</h1> */}
        <h2 className="section-title text-center">Latest Blogs</h2>

        {/* --- Premium Editorial Asymmetric Showcase Row --- */}
        <div className={styles.editorialShowcase}>
          
          {/* Column 1: Big Hero Feature Card */}
          {featureSectionBlogs[0] && (
            <div className={styles.heroColumn}>
              {renderCard(featureSectionBlogs[0], 0, styles.heroCard)}
            </div>
          )}

          {/* Column 2: 2 Columns x 2 Rows Inner Compact Grid */}
          <div className={styles.subGridColumn}>
            {featureSectionBlogs.slice(1).map((item, idx) => 
              renderCard(item, idx + 1, styles.compactCard)
            )}
          </div>
          
        </div>

        {/* --- Standard Base Grid for remaining items (6th item onwards) --- */}
        {regularRowBlogs.length > 0 && (
          <div className={styles.regularGrid}>
            {regularRowBlogs.map((item, idx) => 
              renderCard(item, idx + 5)
            )}
          </div>
        )}

      </div>
    </section>
  );
}