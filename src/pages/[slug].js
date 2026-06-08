import getConfig from 'next/config'
import Review from './review';
import Blog from './blogs/single';
import Store from './store';
import Special from './special';
import Error from 'next/error'


const { publicRuntimeConfig } = getConfig()

const exampleFunction = ({ page }) => {
  if (page==null) {
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
  try {
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slugs`);

    if (!response.ok) {
      return { paths: [], fallback: 'blocking' }
    }

    const data = await response.json();
    const paths = data.map(post => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' }
  } catch {
    return { paths: [], fallback: 'blocking' }
  }
}


export async function getStaticProps({ params }) {

  try {
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slug/${params.slug}`);

    if (!response.ok) {
      return { notFound: true, revalidate: 10 }
    }

    const data = await response.json();
    return {
      props: {
        page: data || null,
      },
      revalidate: 10

    };
  } catch {
    return { notFound: true, revalidate: 10 }
  }
}

export default exampleFunction;
