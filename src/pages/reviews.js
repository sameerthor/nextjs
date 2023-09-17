import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import '@/styles/subcategories.css'
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Reviews({ data }) {



    return (
        <><Head>
            <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
            <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
            <title>{data.metas.seo_title}</title>
            <meta name="description" content={data.metas.seo_descp == null ? "" : `${data.metas.seo_descp}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:title" content={`${data.metas.seo_title}`} />
            <meta name="twitter:description" content={data.metas.seo_descp == null ? "" : `${data.metas.seo_descp}`} />
            <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}reviews`} />
            <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
            <meta property="og:title" content={`${data.metas.seo_title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${publicRuntimeConfig.webUrl}reviews`} />
            <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_logo.value}`} />
            <meta property="og:site_name" content={`${data.meta.site_title.value}`} />
            <meta property="og:description" content={data.metas.seo_descp == null ? "" : `${data.metas.seo_descp}`} />

            <link rel="canonical" href={`${publicRuntimeConfig.webUrl}reviews`} />
        </Head>

            <Header />
            <div className="container-fluid">
                <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                    <div className="row">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/reviews">Reviews</Link></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid sub-categories">
                <div className="container col-lg-9 col-md-9 col-sm-9">
                    <div className="row">
                        {data.reviews.map((item, index) =>

                            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                <div className="shadow sub-categories-box">
                                    <Link
                                        href={`/${item.slug}`}
                                    >{item.render_name}</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/reviews`);
    const data = await response.json();
    return {
        props: {
            data: data
        },
        revalidate: 10
    };
}