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
                    <section className='categorySection'>
                        <div className='container'>
                            <div className="row">
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="/">scoopreview.com</a> /</li>
                                        <li>review-category</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row row-cols-2">
                                <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div> <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 category-box">
                                    <div className="category-item">
                                        <div className="cat-img">
                                            <a href="/category/accessories">
                                                <img 
                                                alt="Accessories" 
                                                loading="lazy" 
                                                width="100" 
                                                height="100" 
                                                decoding="async" 
                                                data-nimg="1"  
                                                src="../assets/batteries.png" 
                                                />
                                            </a>
                                        </div>
                                        <div className="category-title">
                                            <a href="/category/accessories">
                                                Accessories
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                   
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