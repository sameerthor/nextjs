
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import BlogSection from '../components/BlogSection'
import ProductReviews from '../components/ProductReviews'
import FeaturesBar from '@/components/FeaturesBar';
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

const fallbackHomePage = {
    meta: {
        site_ico: { value: 'favicon.png' },
        site_title: { value: 'ScoopReview' },
        site_desc: { value: 'ScoopReview' },
        site_logo: { value: 'images/logo.png' },
        fbapp_id: { value: '' },
    },
    blogs: [],
};

// Images Import //
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
import ReviewHero from '@/components/ReviewHero';
import HandPicked from '@/components/HandPicked';



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
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${page.meta.site_ico.value}`} />
                <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                <meta name="verification" content="c4bbf206204fcaf260f7fe5d6c484cf2" />
                <title>{page.meta.site_title.value}</title>
                <meta name="description" content={`${page.meta.site_title.value}`} />
                <meta name='impact-site-verification' value='dd205839-758b-4f65-9fc9-83726314cdd4'></meta>
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
            <Script
                id="impact-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    (function(i,m,p,a,c,t){
                    c.ire_o=p;
                    c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};
                    t=a.createElement(m);
                    var z=a.getElementsByTagName(m)[0];
                    t.async=1;
                    t.src=i;
                    z.parentNode.insertBefore(t,z)
                    })('https://utt.impactcdn.com/P-A7146240-f4bd-4dac-8cb6-05635577dbac1.js','script','impactStat',document,window);
                    impactStat('transformLinks');
                    impactStat('trackImpression');
                `,
                }}
            />
            <ReviewHero/>
            <HandPicked/>
            
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
            {/* <div className="container-fluid mt-5 feature-box">
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
            </div> */}
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
           
            <ProductReviews/>
            

            <BlogSection blogs={page.blogs} imageBaseUrl={publicRuntimeConfig.imageUrl} />

             <FeaturesBar/>
            <Footer />
        </>
    )
}
export async function getStaticProps() {

    let data = fallbackHomePage;

    try {
        const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/home`);

        if (!response.ok) {
            throw new Error(`Home API responded with ${response.status}`);
        }

        data = await response.json();
    } catch (error) {
        console.warn('Unable to load home page data:', error.message);
    }

    return {
        props: {
            page: data
        },
        revalidate: 10
    };
}
// ignore this line
