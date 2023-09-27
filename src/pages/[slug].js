import getConfig from 'next/config'
import Review from './review';
import Blog from './blogs/single';
import Store from './store';
import Special from './special';


const { publicRuntimeConfig } = getConfig()

const exampleFunction = ({ page }) => {

    return (
           <>
           { page.review && 
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
      params: {slug: post.slug},
  }));

  // We'll pre-render only these paths at build time.
  return {paths, fallback: 'blocking'}
}


export async function getStaticProps({params}) {

   
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slug/${params.slug}`);
    const data = await response.json();
    return {
        props: {
            page: data || null,
        },
        revalidate: 10

    };
}

export default exampleFunction;