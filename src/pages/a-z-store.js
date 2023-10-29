import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import AlphabeticalStores from '../components/alphabetical-stores';
import '@/styles/a-z-store.css'
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function azStores({ data }) {



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
            <div className="container col-lg-9 col-md-12 col-xs-12 navigation">
                <div className="row">
                    <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/a-z-stores">Stores</Link></p>
                </div>
            </div>
            <div className="container letter-box col-lg-9 col-md-12 col-xs-12">
                <div className="main-heading">
                    <h1>Store A-Z</h1>
                </div>
                <div className="letters">
                    {alphabet.split("").map((c) => {
                        return (
                            <a href={`#${c}box`}>{c}</a>
                        );
                    })}

                    <a href="#0-9box" className='number'>0-9</a>
                </div>
                {alphabet.split("").map((c) => {
                    return (
                        <>
                            <><AlphabeticalStores alpha={c} /></>

                        </>
                    );
                })}
                <><AlphabeticalStores alpha='0-9' /></>

            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/a-z-store`);
    const data = await response.json();
    return {
        props: {
            data: data
        },
        revalidate: 10
    };
}