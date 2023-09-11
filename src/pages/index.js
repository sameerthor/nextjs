
import { useState, useEffect } from "react";
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


export default function Home({page}) {
    const [homeData, setHomeData] = useState(page);


    return (
        <>
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
                                                <a href={`/review-category/${item.slug}`}> <img src={`${publicRuntimeConfig.imageUrl}images/banner/${item.thumb}`} alt="image" className="card-img-top" /></a>
                                                <div className="card-body">
                                                    <a href={`/review-category/${item.slug}`}> <h4>{item.name}</h4></a>
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
                            <a href="./review.html"><img src="./images/apple.webp" alt="" /></a>
                            <p><a href="">Tech & Gadgets</a></p>
                            <h4 className="text-center"><a href="./review.html">Apple Review</a></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <a href="./review.html"> <img src="./images/clinique.webp" alt="" /></a>
                            <p><a href="">Health & Wellness</a></p>
                            <h4 className="text-center"><a href="./review.html">Clinique Review</a></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <a href="./review.html"><img src="./images/lego.webp" alt="" /></a>
                            <p><a href="">Babycare</a></p>
                            <h4 className="text-center"><a href="./review.html">LEGO Review</a></h4>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-7 featured-items">
                            <a href="./review.html"> <img src="./images/sams-club.webp" alt="" /></a>
                            <p><a href="">E-Commerce</a></p>
                            <h4 className="text-center"><a href="./review.html">Sam's Review</a></h4>
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
                                <a href="./review.html"><img src="./images/Bath-n-Body-Works.webp" alt="" /></a>
                                <p className="review-category"><a href="">Health & Wellness</a></p>
                                <h4 className="review-topic"><a href="./review.html">Bath & Body Review</a></h4>
                                <p className="review-desc">Bath & Body Works provides you with ample choices for choosing the right skincare products for your body <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 review-item">
                            <div className="item-box shadow">
                                <a href="./review.html"><img src="./images/Ebay.webp" alt="" /></a>
                                <p className="review-category"><a href="">E-Commerce</a></p>
                                <h4 className="review-topic"><a href="./review.html">Ebay Review</a></h4>
                                <p className="review-desc">Ebay is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-lg-10 col-md-10 col-sm-10 review-box">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <a href="./review.html"><img src="./images/Fruit-Bouquet.webp" alt="" /></a>
                                <p className="review-category"><a href="">Food & Drinks</a></p>
                                <h4 className="review-topic"><a href="./review.html">Fruit Bouquets Review</a></h4>
                                <p className="review-desc">If you are looking for an alternative to showpieces or high sugar <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <a href="./review.html"><img src="./images/Sally.webp" alt="" /></a>
                                <p className="review-category"><a href="">Health & Wellness</a></p>
                                <h4 className="review-topic"><a href="./review.html">Sally Beauty Review</a></h4>
                                <p className="review-desc">Sally Beauty Supply and Beauty Systems Group has <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <a href="./review.html"><img src="./images/ulta-beauty.webp" alt="" /></a>
                                <p className="review-category"><a href="">Health & Wellness</a></p>
                                <h4 className="review-topic"><a href="./review.html">Ulta Beauty Review</a></h4>
                                <p className="review-desc">Ulta Beauty acts as your one-stop-shop for exploring <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-5 review-item">
                            <div className="shadow item-box">
                                <a href="./review.html"><img src="./images/annie-selke.webp" alt="" /></a>
                                <p className="review-category"><a href="">Home Products</a></p>
                                <h4 className="review-topic"><a href="./review.html">Annie Selke Review</a></h4>
                                <p className="review-desc">Annie Selke is a firm that designs and manufactures bedding <a href="./review.html">read more</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid week-review">
                <div className="container col-lg-10 col-md-10 col-sm-10 week-box">
                    <div className="row">
                        <h2>Top Reviews of the Week</h2>
                        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"> <img src="./images/8 Greens.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"> <span className="week-title d-block text-center">8 Greens</span></a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"> <img src="./images/Wisp.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"><span className="week-title d-block text-center">Wisp</span></a>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"><img src="./images/Bombas socks.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"> <span className="week-title d-block text-center">Bombas</span></a>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"><img src="./images/Ritual Vitamins.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"> <span className="week-title d-block text-center">Ritual</span></a>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"><img src="./images/Keeps Hair.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"> <span className="week-title d-block text-center">Keeps</span></a>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-5 week-items">
                            <div className="week-image">
                                <a href="./review.html"><img src="./images/Prose_Hair.jpg" alt="" /></a>
                            </div>
                            <a href="./review.html"> <span className="week-title d-block text-center">Prose</span></a>
                        </div>

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
                                    <div className="col-lg-4 col-md-6 col-sm-9 latest-blog" key={item.id}>
                                        <div className="blog-items">
                                            <Link href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></Link>
                                            <div className="d-flex">
                                                <span className="blog-category me-auto"> {item.category}</span>
                                            </div>
                                            <h2 className="blog-title"><a href="">{item.title.substring(0,35)}....</a></h2>
                                            <p className="blog-desc">{item.content.replace( /(<([^>]+)>)/ig, '').substring(0,200)}....</p>
                                            <p className="author">By <a href="">Auhtor_Name</a> | <span className="time">10 min read</span></p>
                                            <div className="icons d-flex">
                                                <span className="me-auto shadow-sm"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Likes 315</span>
                                                <span className="ms-auto shadow-sm"><i className="fa fa-share-alt" aria-hidden="true"></i> Shares 78</span>
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