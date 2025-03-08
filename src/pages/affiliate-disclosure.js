
import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/site-policy.css'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Script from "next/script";
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()



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
            <section className="sitePolicy">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2>ScoopReview Affiliate Disclosure 
                        </h2>
                        <p>
                        At ScoopReview, we aim to provide honest reviews, helpful guides and verified coupons. We spend a lot of time in researching products, bringing new offers and creating valuable content that is useful for you. 
                        </p>
                        <p>
                        This affiliate disclosure policy explains to you how we operate and how we are able to keep the site going.  
                        </p>
                        <h2>
                        What are Affiliate Links? 
                        </h2>
                        <p>
                        Affiliate links are special links that track referrals from our site to the merchant’s website. Whenever you click on a link and buy a product, we may receive some commission from the retailer. 
                        </p>
                        <p>
                        This is at no additional cost to you; the prices are exactly the same whether you use an affiliate link or go directly to the store’s website. These commissions allow us to maintain the site and continue to provide honest reviews and the most up-to-date deals.
                        </p>
                        <h2>
                        Our Commitment 

                        </h2>
                        <p>
                        We assure that our participation in affiliate programs will not influence our reviews or suggestions. We suggest only those products and services we think will benefit you. Note that we don't own or endorse any company behind these products and cannot guarantee their quality or service.
                        </p>
                        <p>
                        Our reviews are conducted on research and user feedback that we collect. We strive to provide you with only honest and unbiased information. We do not receive payment or complimentary products in exchange for positive reviews. Our goal is to provide you the best brand reviews so that you can make wise purchasing decisions.

                        </p>
                      
                        <h2>
                        Our Promise to You
                        </h2>
                        <p>
                        We promise to always be transparent about using affiliate links. We will never recommend a product or service just because we can make money from a commission. Whether it is a detailed product/brand review or a roundup of the best deals, we only give information that is accurate and helpful. Our priority is to provide you with unbiased reviews and to help you save money at the same time. 
                        </p>
                       
                        <p>
                        Thank you for choosing ScoopReview as your go-to source for genuine reviews and coupons!
                        </p>
                        
                        </div>
                    </div>
                </div>
            </section>
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