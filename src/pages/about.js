
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
                        <div class="col-12">
                            <h1 class="text-center"> About Scoopreview</h1>
                            <p>
                                Welcome to Scoopreview, your go-to destination for the best deals and coupons. We believe everyone deserves to save money; therefore we have brought together all the amazing deals and coupons available on the web. On our platform, you will find great ways to grab incredible discounts on a broad range of products and services. Browse our website to discover the latest deals, promo codes, and discounts. 
                            </p>
                            <p>
                                Join us at Scoopreview and start saving money today! 
                            </p>
                            <h2>
                                Our Mission
                            </h2>
                            <p>
                                Our mission is simple: to provide a user-friendly platform where you can discover exclusive coupons and offers from your favorite online stores. We aim to help our customers save money and make smart purchasing decisions. We understand that saving money is important to you in today’s economy, and that’s why we strive to provide the most up-to-date and exclusive deals on a wide range of products and services. Scoopreview helps you score the best deals and discounts on electronics, fashion, travel, and anything in between.
                            </p>
                            <p>
                                Here’s how we achieve our mission:
                            </p>
                            <ul>
                                    <li>Our dedicated team finds and verifies the top deals, so you always have access to the best savings opportunities.
                                    </li>
                                    <li>We have designed our website with simplicity in mind. Finding the coupons you need is quick and easy.</li>
                                    <li>We offer deals and coupon codes across a vast range of categories. You can save on everything from groceries and clothing to travel and entertainment. 
                                    </li>
                            </ul>
                            <h2>Our Values </h2>
                            <h2>1. Customer-Centric Approach</h2>
                            <p>
                                Our commitment knows no bounds when it comes to providing our users with the most accurate deals. We hold a belief in simplicity and ease of use. Our site is designed with an intuitive interface where any individual can easily find discounts across various categories. By just a few clicks you are able to obtain either the promo codes or direct links to discounted products. Additionally, our customers form a valued community for whom we always provide exceptional customer service.
                            </p>
                            <h2>
                                2. Accuracy
                            </h2>
                            <p>
                                To find you the most valuable discounts, our dedicated team of bargain hunters browse the web. We handpick each coupon code and deal to make sure it is genuine. Before posting anything, we authenticate all deals which we have featured. Thus, whatever offer you will ever come across at Scoopreview is genuine and can help you save money on your purchases.
                            </p>
                            <h2>
                                3. Privacy 
                            </h2>
                            <p>
                                What sets us apart is our commitment to protecting your privacy. We prioritize your data security and make sure that your personal information is never compromised. We do not use any tracking technologies that violate your privacy concern. Scoopreview offers a completely safe browsing experience devoid of any kind of data collection. 
                            </p>
                            <h2>
                                How Scoopreview Works
                            </h2>
                            <p>
                                    
                                Scoopreview generates revenue through its partnerships with online retailers and brands. In case a user visits our site and uses a link to buy something or applies the coupon code, Scoopreview receives an affiliate commission. With this model, Scoopreview is capable of giving exclusive deals and discounts to users while at the same time making money to continue running its operations.

                            </p>
                            <p>
                                    It’s important to note that the commission earned by Scoopreview does not affect the price of the products or services. The commission is solely based on the referral and does not impact the user’s shopping experience or the final amount they pay. 
                            </p>
                            <p>
                                Thank you for choosing Scoopreview as your trusted source for all things coupons and deals!

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