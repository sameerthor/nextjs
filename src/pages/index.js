
import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/home.css'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Script from "next/script";
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
    autoplay: true,
});

// Images Import //
import appleImage from '../../public/assets/apple.webp'
import cliniqueImage from '../../public/assets/clinique.webp';
import legoImage from '../../public/assets/lego.webp';
import samsClubImage from '../../public/assets/sams-club.webp';
import BathnBodyImage from '../../public/assets/Bath-n-Body-Works.webp';
import ebayImage from '../../public/assets/Ebay.webp';
import fruitBuqet from '../../public/assets/Fruit-Bouquet.webp';
import SallyImage from '../../public/assets/Sally.webp';
import ultrabeauty from '../../public/assets/ulta-beauty.webp';
import annieselke from '../../public/assets/annie-selke.webp';
import findIcon from '../../public/assets/find-icon.webp';
import reviewIcon from '../../public/assets/review-icon.webp';
import shopIcon from '../../public/assets/shop-icon.webp';
import saveIcon from '../../public/assets/save-icon.webp';



const Responsive = {
    0: {
        items: 1
    },
    600: {
        items: 1
    },
    800: {
        items: 1
    },
    1160: {
        items: 1
    }
}



export default function Home({ page }) {
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

            <section className="homeCarousel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <OwlCarousel className='owl-theme' responsive={Responsive} loop margin={15} autoplay={true}  autoplayTimeout={3000} autoplayHoverPause={true} smartSpeed={2000} nav>
                                <div className="item">
                                   <a href="/clinique-review" className="carouselItme">
                                        <div className="imgBox">
                                            <Image
                                                src={('https://scoopreview.com/images/review-logo/ikaria-beauty-review.webp')}
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="cat">
                                            Health And Wellness
                                        </div>
                                        <div className="desc">
                                            Clinique has grown over the years while remaining faithful to its basic ideas, developing products with scientific support that deliver substantial effects without causing
                                        </div>
                                        <div className="date">
                                          January 22, 2024
                                        </div>
                                   </a>
                                </div>
                                <div className="item">
                                   <a href="/fitphyt-discount-code" className="carouselItme">
                                        <div className="imgBox">
                                            <Image
                                                src={('https://scoopreview.com/wp-content/uploads/2019/09/Fitphyt-Coupons.jpg')}
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="cat">
                                            Lifestyle
                                        </div>
                                        <div className="desc">
                                            Fitphyt is known to offer branded quality leggings that are super comfortable and extremely resistant. The fabric is fantastic that allows you to wear them on any occasion. 
                                        </div>
                                        <div className="date">
                                          January 10, 2024
                                        </div>
                                   </a>
                                </div>
                                <div className="item">
                                   <a href="/fruit-bouquets-review" className="carouselItme">
                                        <div className="imgBox">
                                            <Image
                                                src={('https://scoopreview.com/wp-content/uploads/2022/04/Fluttering-Fruit-Arrangement-Review.jpg')}
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="cat">
                                            Food & Drinks
                                        </div>
                                        <div className="desc">
                                            Fruit Bouquets is a brand that offers an endless collection of beautifully presented fruits and flowers.
                                        </div>
                                        <div className="date">
                                          March 10, 2024
                                        </div>
                                   </a>
                                </div>
                                
                            </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                            <h2 class="section-title">Latest Finds</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <a className="latestFinds" href="/anact-review">
                                        <div className="imgBox">
                                            <Image
                                                src={'./images/anact.webp'}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="desc">
                                                Anact Reviews : Best Hemp-Based Towel And Face Masks
                                        </div>
                                        <div className="date">
                                                September 12, 2025
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a className="latestFinds" href="/affirmicious-review">
                                        <div className="imgBox">
                                            <Image
                                                src={'./images/affirmicious.webp'}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="desc">
                                                Affirmicious Reviews | Best Astrology And Zodiac Positive Affirmations
                                        </div>
                                        <div className="date">
                                                October 14, 2025
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-6">
                                    <a className="latestFinds" href="/indochino-review">
                                        <div className="imgBox">
                                            <Image
                                                src={'./images/indochino.avif'}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="desc">
                                               Indochino Review | Best Custom Suits, Shirts, Chinos, And More
                                        </div>
                                        <div className="date">
                                                September 14, 2025
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a className="latestFinds" href="/vellen-hair-review">
                                        <div className="imgBox">
                                            <Image
                                                src={'./images/vellen-hair.webp'}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="desc">
                                               Vellen-Hair Reviews | Best Hair Highlighting Comb Set
                                        </div>
                                        <div className="date">
                                                November 14, 2025
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="spotlight">
                <div className="container">
                    <h2 class="section-title text-center">Handpicked for You</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <a className="latestFinds" href="/well-care-botanicals-review">
                                <div className="imgBox">
                                    <Image
                                        src={'./images/wellcare.avif'}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <div className="desc">
                                        Well Care Botanicals Review - Quick Summary
                                        Their CBD works on the brain as an antidepressant, so it also acts as a pain reliever.

                                </div>
                               
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a className="latestFinds" href="/brown-and-ginger-review">
                                <div className="imgBox">
                                    <Image
                                        src={'./images/brown.webp'}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <div className="desc">
                                        Brown and Ginger Review - Quick Summary
                                       Premium decor pieces to add ambiance to your home 
                                </div>
                               
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a className="latestFinds" href="/brown-and-ginger-review">
                                <div className="imgBox">
                                    <Image
                                        src={'./images/batanaful.jpeg'}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <div className="desc">
                                       Batanaful Review
                                      Batanaful products are beneficial for achieving our hair and skin goals without the use of any harsh chemicals.
                                </div>
                               
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a className="latestFinds" href="/preloved-review">
                                <div className="imgBox">
                                    <Image
                                        src={'../images/preloved.avif'}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <div className="desc">
                                       Preloved Reviews
                                      Speak with a vendor. To confirm pricing and make arrangements for pickup or delivery, contact the vendor directly.
                                </div>
                               
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 why-scoop">
                    <h1 className="text-center">Why ScoopReview</h1>
                    <p className="text-center">We're one of the trusted sources for honest and in-depth brand reviews.</p>
                </div>
                <div className="container col-lg-8 col-md-10 col-xs-10 why-scoop">
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
            </div> */}
            {/* <div className="container-fluid">
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
                                                        <a href={`/categories/${item.slug}`}> <Image width={0} height={0} sizes="100vw"
                                                            style={{ width: '100%', height: 'auto' }} src={`${publicRuntimeConfig.imageUrl}images/category/${item.thumb}`} alt="image" className="card-img-top" /></a>
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
            </div> */}
            <div className="container-fluid mt-5 feature-box">
                <div className="container col-lg-10 col-md-12 col-sm-10">
                    <h1>Featured</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link prefetch={false} href="/apple-review"><Image width={0} height={0} sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} src={appleImage} alt="" /></Link>
                            <p><Link prefetch={false} href="/review-category/tech-and-gadgets">Tech & Gadgets</Link></p>
                            <h4 className="text-center"><Link prefetch={false} href="/apple-review">Apple Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link prefetch={false} href="/clinique-review"> <Image width={0} height={0} sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} src={cliniqueImage} alt="" /></Link>
                            <p><Link prefetch={false} href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                            <h4 className="text-center"><Link prefetch={false} href="/clinique-review">Clinique Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link prefetch={false} href="/lego-reviews"><Image width={0} height={0} sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} src={legoImage} alt="" /></Link>
                            <p><Link prefetch={false} href="/review-category/babycare">Babycare</Link></p>
                            <h4 className="text-center"><Link prefetch={false} href="/lego-reviews">LEGO Review</Link></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <Link prefetch={false} href="/sams-club-review"> <Image width={0} height={0} sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} src={samsClubImage} alt="" /></Link>
                            <p><Link prefetch={false} href="/review-category/e-commerce">E-Commerce</Link></p>
                            <h4 className="text-center"><Link prefetch={false} href="/sams-club-review">Sam's Review</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid search-product">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Get your desired <strong>Products / </strong> <strong><span>Reviews</span></strong> & more</h1>
                        <div className="col-lg-9 search-box">
                            <div className="search-border">
                                <Search
                                    fluid
                                    loading={loading}
                                    input={{ fluid: true }}
                                    placeholder="Search for product or review..."
                                    onResultSelect={(e, data) =>{
                                        setValue(data.result.title);window.location.replace(data.result.slug);

                                    }}
                                    onSearchChange={handleSearchChange}
                                    results={results}
                                    value={value}
                                />
                            </div>            
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 review-box">
                    <div className="row">
                        <h2>Best Product Reviews</h2>
                        <div className="col-lg-6 col-md-6 col-sm-5 review-item">
                            <div className="item-box shadow">
                                <Link prefetch={false} href="/bath-and-body-works-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={BathnBodyImage} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/bath-and-body-works-review">Bath & Body Review</Link></h4>
                                <p className="review-desc">Bath & Body Works provides you with ample choices for choosing the right skincare products for your body <Link prefetch={false} href="/bath-and-body-works-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 review-item">
                            <div className="item-box shadow">
                                <Link prefetch={false} href="/ebay-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={ebayImage} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/e-commerce">E-Commerce</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/ebay-review">Ebay Review</Link></h4>
                                <p className="review-desc">Ebay is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world <Link prefetch={false} href="/ebay-review">read more</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-lg-10 col-md-10 col-sm-10 review-box">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link prefetch={false} href="/fruit-bouquets-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={fruitBuqet} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/food-drinks">Food & Drinks</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/fruit-bouquets-review">Fruit Bouquets Review</Link></h4>
                                <p className="review-desc">If you are looking for an alternative to showpieces or high sugar <Link prefetch={false} href="/fruit-bouquets-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link prefetch={false} href="/sally-beauty-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={SallyImage} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/sally-beauty-review">Sally Beauty Review</Link></h4>
                                <p className="review-desc">Sally Beauty Supply and Beauty Systems Group has <Link prefetch={false} href="/sally-beauty-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link prefetch={false} href="/ulta-beauty-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={ultrabeauty} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/health-and-wellness">Health & Wellness</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/ulta-beauty-review">Ulta Beauty Review</Link></h4>
                                <p className="review-desc">Ulta Beauty acts as your one-stop-shop for exploring <Link prefetch={false} href="/ulta-beauty-review">read more</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <Link prefetch={false} href="/annie-selke-review"><Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src={annieselke} alt="" /></Link>
                                <p className="review-category"><Link prefetch={false} href="/review-category/home-products">Home Products</Link></p>
                                <h4 className="review-topic"><Link prefetch={false} href="/annie-selke-review">Annie Selke Review</Link></h4>
                                <p className="review-desc">Annie Selke is a firm that designs and manufactures bedding <Link prefetch={false} href="/annie-selke-review">read more</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid week-review">
                <div className="container col-lg-10 col-md-10 col-sm-10 week-box">
                    <div className="row">
                        <h2>Top Reviews of the Week</h2>
                        {homeData.top_reviews && (
                            homeData.top_reviews.map((item, index) =>
                                <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 week-items" key={index}>
                                    <div className="week-image">
                                        <Link prefetch={false} href={`${item.slug}`}> <Image width={0} height={0} sizes="100vw"
                                            style={{ width: '100%', height: '100%' }} src={`${publicRuntimeConfig.imageUrl}${item.review_logo.includes("review-logo") ? "images/" + item.review_logo : item.review_logo}`} alt="" /></Link>
                                    </div>
                                    <Link prefetch={false} href={`${item.slug}`}> <span className="week-title d-block text-center">{item.render_name}</span></Link>
                                </div>
                            ))}
                    </div>

                </div>
            </div> */}

            <div className="container-fluid">
                <div className="container  col-lg-10 col-md-10 col-sm-10 blog-box">
                    <div className="row">
                        <h1>Latest Blogs</h1>
                        {homeData.blogs && (
                            homeData.blogs.map((item) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 latest-blog" key={item.id}>
                                        <div className="blog-items">
                                            <Link prefetch={false} href={`/${item.slug}`}><Image width={0} height={0} sizes="100vw"
                                                style={{ width: '100%', height: 'auto' }} src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></Link>
                                            <div className="d-flex">
                                                <span className="blog-category me-auto"> {item.category}</span>
                                            </div>
                                            <h2 className="blog-title"><a href={`/${item.slug}`}>{item.title.substring(0, 35)}....</a></h2>
                                            <p className="blog-desc">{item.content.replace(/(<([^>]+)>)/ig, '').substring(0, 200)}....</p>
                                            <p className="author">By <a href={`/${item.slug}`}>Tanay Saxena</a> <span className="time"></span></p>
                                            {/* <div className="icons d-flex">
                                                <span className="me-auto shadow-sm"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Likes {item.like}</span>
                                                <span className="ms-auto shadow-sm"><i className="fa fa-share-alt" aria-hidden="true"></i> Shares {item.share}</span>
                                            </div> */}
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
                                    <Image width={0} height={0} sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} src={findIcon} alt="" />
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
                                    <Image width={0} height={0} sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} src={reviewIcon} alt="" />
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
                                    <Image width={0} height={0} sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} src={shopIcon} alt="" />
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
                                    <Image width={0} height={0} sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} src={saveIcon} alt="" />
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