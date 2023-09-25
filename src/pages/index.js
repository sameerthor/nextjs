
import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import '@/styles/home.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import dynamic from "next/dynamic";
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

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


export default function Home({ page }) {
    console.log(page);
    const [homeData, setHomeData] = useState(page);

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${page.meta.site_ico.value}`} />
                <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                <title>{page.meta.site_title.value}</title>
                <meta name="description" content={`${page.meta.site_title.value}`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:title" content={`${page.meta.site_title.value}`} />
                <meta name="twitter:description" content={`${page.meta.site_desc.value}`} />
                <meta name="twitter:image" content={`${publicRuntimeConfig.imageUrl}/${page.meta.site_logo.value}`} />
                <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}`} />
                <meta property="fb:app_id" content={`${page.meta.fbapp_id.value}`} />
                <meta property="og:title" content={`${page.meta.site_title.value}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${publicRuntimeConfig.webUrl}`} />
                <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}/${page.meta.site_logo.value}`} />
                <meta property="og:site_name" content={`${page.meta.site_title.value}`} />
                <meta property="og:description" content={`${page.meta.site_desc.value}`} />
                <link rel="canonical" href={`${publicRuntimeConfig.webUrl}`} />
            </Head>
            <Header />

            <section>
                <div className="container-fluid my-2">
                    <h1 className="text-center fw-bold">Top <span className="text-success">Reviews</span></h1>
                    <div className="row mt-5">
                        {homeData.home_slides && (
                            <OwlCarousel className='owl-theme' responsive={Responsive} loop margin={15} nav>
                                {homeData.home_slides.map((item) => {
                                    return (
                                        <div className="item mb-4" key={item.id}>
                                            <div className="card border-0 shadow">
                                                <Link href={`/review-category/${item.slug}`}> <img src={`${publicRuntimeConfig.imageUrl}images/banner/${item.thumb}`} alt="image" className="card-img-top" /></Link>
                                                <div className="card-body">
                                                    <Link href={`/review-category/${item.slug}`}> <h4>{item.name}</h4></Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </OwlCarousel>
                        )}
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 why-scoop">
                    <h1 className="text-center">Why ScoopReview</h1>
                    <p className="text-center">We're one of the trusted sources for honest and in-depth brand reviews.</p>
                </div>
                <div className="container col-lg-6 col-md-6 col-sm-6 why-scoop">
                    <div id="bg-image">

                    </div>
                </div>

                <div className="container col-lg-10 col-md-10 col-sm-10 trust-content">
                    <h1 className="main-heading">A Trusted Platform For "Unbiased" Reviews</h1>
                    <p>As a customer, you eagerly want to know whether a brand is legit or not, the different offers available, the shipping policy, and most importantly, the security of your credit card. Well, worry no more! We strive to answer all your questions. At ScoopReview, you get the most accurate and relevant information about the brand you are purchasing from. Whether it's about finding your favorite brands or discovering helpful advice, we will help you get it right! Here, you will get an insight into thousands of brands that help you make better shopping decisions.</p>
                    <h2><span><i className="fa fa-check-circle-o" aria-hidden="true"></i></span>Legit Reviews</h2>
                    <p>We offer 100% genuine and unbiased reviews to help shoppers make wise decisions regarding their purchases. At ScoopReview, we review all the leading and emerging brands so you can make the best purchase decision.</p>
                    <h2><span><i className="fa fa-check-circle-o" aria-hidden="true"></i></span> Best Deals</h2>
                    <p>We are a trusted source for the best deals as well as verified and working coupons. Do not miss out on the golden chance to save more! Grab the best deals today to enjoy money saving opportunities !!</p>
                    <h2><span><i className="fa fa-check-circle-o" aria-hidden="true"></i></span>Customer Satisfaction</h2>
                    <p>Customer satisfaction is our topmost priority. We ensure that our customers are happy with their purchase from the beginning to the end. For that, we have ratings on every brand's review and deals. However, if you are not getting the discounts we have promised, you can contact us at hello@scoopreview.com so that we can resolve your problem.</p>
                    <h3 className="text-center">Happy Shoping! <span><i className="fa fa-smile-o" aria-hidden="true"></i></span></h3>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10">
                    <section>
                        <div className="container-fluid my-2">
                            <h1 className="text-center fw-bold mainh">Reviews By Categories</h1>
                            <div className="row mt-5">
                                {homeData.home_categories && (
                                    <OwlCarousel className='owl-theme' responsive={Responsive} loop margin={15} nav>
                                        {homeData.home_categories.map((item) => {
                                            return (
                                                <div className="item mb-4 cust-item mx-auto" key={item.id}>
                                                    <div className="custome card border-0">
                                                        <a href={`/review-category/${item.slug}`}> <img src={`${publicRuntimeConfig.imageUrl}images/category/${item.thumb}`} alt="image" className="card-img-top" /></a>
                                                    </div>
                                                    <div className="custome-text">
                                                        <span>{item.name}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
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
            <div className="container-fluid mt-5 feature-box">
                <div className="container col-lg-10 col-md-12 col-sm-10">
                    <h1>Featured</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link href="/apple-review"><img src="./images/apple.webp" alt="" /></Link>
                            <p><Link href="/review-category/tech-and-gadgets">Tech & Gadgets</Link></p>
                            <h4 className="text-center"><Link href="/apple-review">Apple Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link href="/clinique-review"> <img src="./images/clinique.webp" alt="" /></Link>
                            <p><Link href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                            <h4 className="text-center"><Link href="/clinique-review">Clinique Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link href="/lego-reviews"><img src="./images/lego.webp" alt="" /></Link>
                            <p><Link href="/review-category/babycare">Babycare</Link></p>
                            <h4 className="text-center"><Link href="/lego-reviews">LEGO Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link href="/sams-club-review"> <img src="./images/sams-club.webp" alt="" /></Link>
                            <p><Link href="/review-category/e-commerce">E-Commerce</Link></p>
                            <h4 className="text-center"><Link href="/sams-club-review">Sam's Review</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid search-product">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Get your desired <strong>Products / </strong> <strong><span>Reviews</span></strong> & more</h1>
                        <div className="col-lg-9 search-box">
                            <form action="">
                                <input type="text" placeholder="search for product or review ..." />
                                <button><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 review-box">
                    <div className="row">
                        <h2>Best Product Reviews</h2>
                        <div className="col-lg-6 col-md-6 col-sm-5 review-item">
                            <div className="item-box shadow">
                                <Link href="/bath-and-body-works-review"><img src="./images/Bath-n-Body-Works.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link href="/bath-and-body-works-review">Bath & Body Review</Link></h4>
                                <p className="review-desc">Bath & Body Works provides you with ample choices for choosing the right skincare products for your body <Link href="/bath-and-body-works-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 review-item">
                            <div className="item-box shadow">
                                <Link href="/ebay-review"><img src="./images/Ebay.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/e-commerce">E-Commerce</Link></p>
                                <h4 className="review-topic"><Link href="/ebay-review">Ebay Review</Link></h4>
                                <p className="review-desc">Ebay is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world <Link href="/ebay-review">read more</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-lg-10 col-md-10 col-sm-10 review-box">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link href="/fruit-bouquets-review"><img src="./images/Fruit-Bouquet.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/food-drinks">Food & Drinks</Link></p>
                                <h4 className="review-topic"><Link href="/fruit-bouquets-review">Fruit Bouquets Review</Link></h4>
                                <p className="review-desc">If you are looking for an alternative to showpieces or high sugar <Link href="/fruit-bouquets-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link href="/sally-beauty-review"><img src="./images/Sally.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link href="/sally-beauty-review">Sally Beauty Review</Link></h4>
                                <p className="review-desc">Sally Beauty Supply and Beauty Systems Group has <Link href="/sally-beauty-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link href="/ulta-beauty-review"><img src="./images/ulta-beauty.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link href="/ulta-beauty-review">Ulta Beauty Review</Link></h4>
                                <p className="review-desc">Ulta Beauty acts as your one-stop-shop for exploring <Link href="/ulta-beauty-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link href="/annie-selke-review"><img src="./images/annie-selke.webp" alt="" /></Link>
                                <p className="review-category"><Link href="/review-category/home-products">Home Products</Link></p>
                                <h4 className="review-topic"><Link href="/annie-selke-review">Annie Selke Review</Link></h4>
                                <p className="review-desc">Annie Selke is a firm that designs and manufactures bedding <Link href="/annie-selke-review">read more</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid week-review">
                <div className="container col-lg-10 col-md-10 col-sm-10 week-box">
                    <div className="row">
                        <h2>Top Reviews of the Week</h2>
                        {homeData.top_reviews && (
                            homeData.top_reviews.map((item) => 
                        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 week-items" key={item.id}>
                            <div className="week-image">
                                <Link href={`${item.slug}`}> <img src={`${publicRuntimeConfig.imageUrl}images/${item.review_logo}`} alt="" /></Link>
                            </div>
                            <Link href={`${item.slug}`}> <span className="week-title d-block text-center">{item.render_name}</span></Link>
                        </div>
                            ))}
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="container  col-lg-10 col-md-10 col-sm-10 blog-box">
                    <div className="row">
                        <h1>Latest Blogs</h1>
                        {homeData.blogs && (
                            homeData.blogs.map((item) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 latest-blog" key={item.id}>
                                        <div className="blog-items">
                                            <Link href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></Link>
                                            <div className="d-flex">
                                                <span className="blog-category me-auto"> {item.category}</span>
                                            </div>
                                            <h2 className="blog-title"><a href={`/${item.slug}`}>{item.title.substring(0, 35)}....</a></h2>
                                            <p className="blog-desc">{item.content.replace(/(<([^>]+)>)/ig, '').substring(0, 200)}....</p>
                                            <p className="author">By <a href={`/${item.slug}`}>Tauseef Siddiqu</a> | <span className="time">{item.time} min read</span></p>
                                            <div className="icons d-flex">
                                                <span className="me-auto shadow-sm"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Likes {item.like}</span>
                                                <span className="ms-auto shadow-sm"><i className="fa fa-share-alt" aria-hidden="true"></i> Shares {item.share}</span>
                                            </div>
                                        </div>
                                    </div>
                                );

                            })
                        )}
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10">
                    <div className="row learn d-sm-none d-md-flex">
                        <div className="col-lg-3 col-md-6 use-coupons">
                            <div className="d-flex use-items">
                                <div className="image">
                                    <img src="./images/find-icon.webp" alt="" />
                                </div>
                                <div>
                                    <h4>Find</h4>
                                    <p>Discover all emerging brands and shop best selling products.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 use-coupons">
                            <div className="d-flex use-items">
                                <div className="image">
                                    <img src="./images/review-icon.webp" alt="" />
                                </div>
                                <div>
                                    <h4>Review</h4>
                                    <p>Read our unbiased reviews to make an informed choice.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 use-coupons">
                            <div className="d-flex use-items">
                                <div className="image">
                                    <img src="./images/shop-icon.webp" alt="" />
                                </div>
                                <div>
                                    <h4>Shop</h4>
                                    <p>Get coupons, deals and offers for huge savings.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 use-coupons">
                            <div className="d-flex use-items" id="last-item">
                                <div className="image">
                                    <img src="./images/save-icon.webp" alt="" />
                                </div>
                                <div>
                                    <h4>Save</h4>
                                    <p>Read reviews and save some cash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export async function getStaticProps() {


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/home`);
    const data = await response.json();
    return {
        props: {
            page: data
        },
        revalidate: 10
    };
}