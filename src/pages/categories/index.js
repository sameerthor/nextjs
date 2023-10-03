import Header from '../../components/header';
import Footer from '../../components/footer';
import '@/styles/categories.css';
import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function Categories({ page }) {

    return (<>
    <Head>
            <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${page.meta.site_ico.value}`} />
            <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
            <title>{page.metas.seo_title}</title>
            <meta name="description" content={page.metas.seo_descp == null ? "" : `${page.metas.seo_descp}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:title" content={`${page.metas.seo_title}`} />
            <meta name="twitter:description" content={page.metas.seo_descp == null ? "" : `${page.metas.seo_descp}`} />
            <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}categories`} />
            <meta property="fb:app_id" content={`${page.meta.fbapp_id.value}`} />
            <meta property="og:title" content={`${page.metas.seo_title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${publicRuntimeConfig.webUrl}categories`} />
            <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}images/${page.meta.site_logo.value}`} />
            <meta property="og:site_name" content={`${page.meta.site_title.value}`} />
            <meta property="og:description" content={page.metas.seo_descp == null ? "" : `${page.metas.seo_descp}`} />

            <link rel="canonical" href={`${publicRuntimeConfig.webUrl}categories`} />
        </Head>
                    <Header />
                    <div className="container-fluid">
                        <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                            <div className="row">
                                <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/categories">Categories</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid categories">
                        <div className="container col-lg-9 col-md-9 col-sm-9">
                            <div className="row">
                                {page.categories.map((item) =>

                                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                        <div className="shadow categories-box">
                                            <Link href={`/categories/${item.slug}`}>{item.name}</Link>
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


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/categories`);
    const data = await response.json();
    return {
        props: {
        page: data
        },
        revalidate: 10
    };
}