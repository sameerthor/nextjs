import getConfig from 'next/config'
import Review from './review';
import Blog from './blogs/single';
import Store from './store';
import Special from './special';
import Error from 'next/error'


const { publicRuntimeConfig } = getConfig()

const exampleFunction = ({ page }) => {
  if (page == null) {
    return <Error statusCode={404} />

  }

  return (
    <>

      {page.review &&
        <Review data={page} />
      }
      {
        page.store && (
          <Store data={page} />)
      }
      {
        page.blog && (
          <Blog data={page} />)
      }
      {
        page.special && (
          <Special data={page} />)
      }
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slugs`);
  const data = await response.json();
  // Get the paths we want to pre-render based on posts
  const paths = data.map(post => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

  // 1️⃣ Try ScoopReview API first (unchanged)
  const response = await fetch(
    `${publicRuntimeConfig.apiBaseUrl}/api/slug/${params.slug}`
  );

  let data = null;

  if (response.ok) {
    data = await response.json();
  }

  // 2️⃣ If ScoopReview page EXISTS → render it
  if (data && data.length>0) {
    return {
      props: {
        page: data,
      },
      revalidate: 10,
    };
  }
  // 3️⃣ NO PAGE FOUND → fallback to WordPress API
  const wpRes = await fetch(
    `https://nowthisreview.com/wp-json/ref/v1/store/${params.slug}`
  );
  if (!wpRes.ok) {
    return { notFound: true };
  }

  const wpData = await wpRes.json();

  if (!wpData?.affiliate_url) {
    return { notFound: true };
  }

  // 4️⃣ Redirect to merchant
  return {
    redirect: {
      destination: wpData.affiliate_url,
      permanent: true,
    },
  };
}


export default exampleFunction;