import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/a-z-store.css'
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
            <div className="container col-lg-9 col-md-12 col-xs-12 navigation">
                <div className="row">
                    <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/a-z-stores">Stores</Link></p>
                </div>
            </div>
            <div class="container letter-box col-lg-9 col-md-12 col-xs-12">
                <div class="main-heading">
                    <h1>Store A-Z</h1>
                </div>
                <div class="letters">
                    <a href="#">A</a>
                    <a href="#">b</a>
                    <a href="#">c</a>
                    <a href="#">d</a>
                    <a href="#">e</a>
                    <a href="#">f</a>
                    <a href="#">g</a>
                    <a href="#">h</a>
                    <a href="#">i</a>
                    <a href="#">j</a>
                    <a href="#">k</a>
                    <a href="#">l</a>
                    <a href="#">m</a>
                    <a href="#">n</a>
                    <a href="#">o</a>
                    <a href="#">p</a>
                    <a href="#">q</a>
                    <a href="#">r</a>
                    <a href="#">s</a>
                    <a href="#">t</a>
                    <a href="#">u</a>
                    <a href="#">v</a>
                    <a href="#">w</a>
                    <a href="#">x</a>
                    <a href="#">y</a>
                    <a href="#">z</a>
                    <a href="#" className='number'>0-9</a>
                </div>
                <div class="alpha-box">
                    <div class="alpha-header">
                        <span class="title">A</span>
                        <a href="">Load More<i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
                    </div>
                    <div class="alpha-content">
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller </a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller </a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                        <a href="" class="order"><span>a -</span>lorem ipsusm doller sit</a>
                    </div>
                </div>
                <div class="alpha-box">
                    <div class="alpha-header">
                        <span class="title">b</span>
                        <a href="">Load More<i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
                    </div>
                    <div class="alpha-content">
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
                            <a href="" class="order"><span>b -</span>Blorem ipsusm doller sit</a>
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