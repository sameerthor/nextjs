import Header from './components/header';
import Footer from './components/footer';
import { useEffect, useState } from "react";
import Head from 'next/head';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import Link from 'next/link';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
import '@/styles/coupons.css'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const Responsive = {
    0: {
        items: 2
    },
    600: {
        items: 3
    },
    800: {
        items: 4
    },
    1160: {
        items: 5
    }
}

export default function Coupons({page}) {

    const [couponsdata, setCouponsdata] = useState(page);

    return (
        <>
             <Head>
                <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${couponsdata.meta.site_ico.value}`} />
                <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                <title>{couponsdata.metas.seo_title}</title>
                <meta name="description" content={couponsdata.metas.seo_descp==null?"":`${couponsdata.metas.seo_descp}`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:title" content={`${couponsdata.metas.seo_title}`} />
                <meta name="twitter:description" content={couponsdata.metas.seo_descp==null?"":`${couponsdata.metas.seo_descp}`} />
                <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}coupons`} />
                <meta property="fb:app_id" content={`${couponsdata.meta.fbapp_id.value}`} />
                <meta property="og:title" content={`${couponsdata.metas.seo_title}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${publicRuntimeConfig.webUrl}coupons`} />
                <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}images/${couponsdata.meta.site_logo.value}`} />
                <meta property="og:site_name" content={`${couponsdata.meta.site_title.value}`} />
                <meta property="og:description" content={couponsdata.metas.seo_descp==null?"":`${couponsdata.metas.seo_descp}`} />

                <link rel="canonical" href={`${publicRuntimeConfig.webUrl}coupons`} />
            </Head>
            <Header />
            <section>
                <div className="container-fluid my-2">
                    <h1 className="text-center fw-bold">The Coupons all you <span className="text-success">NEED</span></h1>
                    <div className="row mt-5">
                        <OwlCarousel className='owl-theme' responsive={Responsive} loop margin={15} nav>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/thanksgiving-day-coupon"> <img src="./assets/thanksgiving.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/thanksgiving-day-coupon"> <h4>Thanksgiving Deal</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/christmas-discount-code"> <img src="./assets/christmas.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/christmas-discount-code"> <h4>Christmas Day Deal</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/happy-new-year-sale"> <img src="./assets/new-year.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/happy-new-year-sale"><h4>New Year Sale</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/black-friday-coupon"><img src="./assets/black-friday.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/black-friday-coupon"> <h4>Black Friday Deals</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/ester-day-offer"><img src="./assets/ester.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/ester-day-offer"><h4>Ester Day Offer</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/labour-day-discount-code"><img src="./assets/labour-day.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/labour-day-discount-code"> <h4>Labour Day Deals</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/eid-offer"> <img src="./assets/eid.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/eid-offer"><h4>Eid Offers</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/halloween-day-sale-coupon"> <img src="./assets/halloween.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/halloween-day-sale-coupon"><h4>Halloween Sale</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/valentine’s-day-discount-code"> <img src="./assets/valentines-day.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/valentine’s-day-discount-code"><h4>Valentines Day Discounts</h4></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item mb-4">
                                <div className="card border-0 shadow">
                                    <Link href="/cyber-monday-coupon"> <img src="./assets/cyber-monday.webp" alt="image" className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link href="/cyber-monday-coupon"><h4>Cyber Monday Sale</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>

                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 coupons-deals">
                    <h3 className="text-center">Top Coupons, Promo Codes & Deals</h3>
                </div>
                <div className="container col-lg-8 col-md-10 col-xs-10 why-scoop">
                    <div id="bg-image">

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 popular-brands">
                    <h2>Popular Brands</h2>
                    <div className="row row-cols-2">
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/agoda-coupons"> <img src="./assets/agoda.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/at-t-mobility-coupons"> <img src="./assets/at-n-tn.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/glamira-coupons"> <img src="./assets/glamira.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/levis-coupons"> <img src="./assets/levis.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/marks-and-spencer-coupons"> <img src="./assets/m-n-s.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 brand-items">
                            <div className="shadow">
                                <Link href="/microsoft-coupons"> <img src="./assets/microsoft.webp" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid message">
                <div className="container col-lg-10 col-md-10 col-sm-10 msg-box">
                    <div className="row">
                        <p>Great Savings Await You! Yes, you read it right. We are your one-stop shop for online coupons and money-saving deals. If you’re looking to save your hard-earned money on fashion, food, travel, electronics, etc, grab the best Coupon Codes listed here to avail discount benefits. Here, you will find thousands of leading and emerging brands as well as popular retailers. Come and take advantage of exclusive deals, the best discounts, and the lowest possible prices.</p><br></br>
                        <p>Whether you want an online store coupon or the hottest deals, you’ll get them here. As your reliable deals and coupons destination, we bring 100% working and the latest Promo Codes for you to pay less. All you have to do is copy the Discount Code from here and paste it on the merchant’s website. Also, you can click on the deals to get instant money saving opportunities. So, what are you waiting for? Start your shopping spree with us to save more on your online purchases.</p>
                    </div>

                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 popular-stores">
                    <h2>Popular Stores</h2>
                    <div className="row row-cols-2">
                        {
                            couponsdata.pstores && couponsdata.pstores.map((item) =>
                                <div className="col-lg-3 col-md-4 col-sm-6 store-box" key={item.id}>
                                    <div className="justify-content-center align-items-center store-items shadow">
                                        <div>
                                            <Link href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.store_logo}`} class="store-img" alt="image"/></Link>
                                        </div>
                                       <div>
                                            <Link href={`/${item.slug}`}><span class="store-name">{item.render_name}</span></Link>
                                       </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10">
                    <section>
                        <div className="container-fluid my-2">
                            <h2>Featured Categories</h2>
                            <div className="row mt-5">
                                {couponsdata.coupon_categories && (
                                    <OwlCarousel className='owl-theme' responsive={Responsive} loop margin={15} nav>
                                        {
                                            couponsdata.coupon_categories.map((item) =>

                                                <div className="item mb-4 mx-auto" key={item.id}>
                                                    <div className="featured card border-0">
                                                        <Link className="shadow" href={`/coupon-category/${item.slug}`}> <img src={`${publicRuntimeConfig.imageUrl}images/category/vector-img/${item.thumb}`} alt="image" className="card-img-top" /></Link>
                                                    </div>
                                                    <div className="custome-text">
                                                        <span>{item.name}</span>
                                                    </div>
                                                </div>
                                            )

                                        }
                                    </OwlCarousel>
                                )}
                            </div>
                            <div className="morebtn ms-auto">
                                <button>View More</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 latest-deal">
                    <h2>Latest Deal</h2>
                    <div className="row">
                        {
                            couponsdata.lstores && couponsdata.lstores.map((item) =>
                                <div className="col-lg-3 col-md-6 col-sm-12 latest-box" key={item.id}>
                                    <div className="latest-items shadow">
                                        <Link className="shadow-sm" href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.store_logo}`} alt={item.render_name} /></Link>
                                        <Link href={`/${item.slug}`}> <h3>{item.render_name}</h3></Link>
                                        <p>{item.seo_title.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)}...</p>
                                        <Link href={`/${item.slug}`}>Get Deal <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></Link>
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


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/coupons`);
    const data = await response.json();
    return {
        props: {
            page: data
        },
        revalidate: 10
    };
}