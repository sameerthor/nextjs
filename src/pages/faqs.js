
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
                        <h2>What Is A Coupon Code?</h2>
                        <p>
                            A coupon code is a special combination of letters and/or numbers that can be redeemed during checkout to avail a discount or any other special offer. These codes provide discounts on products, free shipping, or other promotional offers that attract customers to buy. Coupons can vary in terms of the discount they offer, the products they apply to, and the duration for which they are valid.
                        </p>
                        <p>
                            The discounts offered by promotional codes can vary widely, from a percentage off the total purchase price to a fixed dollar amount discount. Another interesting fact is that coupon codes give you free shipping or other benefits. Retailers use them to promote their products, increase sales, attract new customers, or reward loyal shoppers.
                        </p>

                        <p>
                            These codes can make a significant difference in the final cost of your order, so it's worth applying the available coupons before completing your transaction. Using discount codes is a smart way to save money and get the best deals while shopping online.
                        </p>
                        <h2>
                            How Do I Use A Promo Code?
                        </h2>
                        <p>
                            When you have a valid promo code you want to use, simply add the items you want to buy to your shopping cart on the store's site. To use the code, look for the field or box at the time of the checkout where you can enter the code. Once entered, the discount or offer associated with the code will be automatically applied to your order. This will reduce the total amount you need to pay.
                        </p>
                        <p>
                            It's important to note that promo codes may have certain rules. Some need a min buy, or have limits on items or brands, or an expiration date when they end. Read the terms and conditions so you can use them right and get the best deals.
                        </p>
                        <h2>
                            Where Can I Find Coupon Codes?
                        </h2>
                        <p>
                            Finding coupons while shopping online can help you save money on your purchases and get the best deals available. There are several ways you can use to discover discount coupons for your favorite retailers and products. One of the simplest ways to find promo codes is to visit the websites of the stores where you like to shop. Many retailers have dedicated sections on their websites that list current promotions and codes that you can use to save money.
                        </p>
                        <p>
                            Another effective way to find coupon codes is to sign up for newsletters from your favorite stores. Retailers often send out exclusive discount codes and promotions to their email subscribers. Additionally, you can follow your favorite stores on social media platforms like Facebook, Twitter, and Instagram, where they may share vouchers and special offers with their followers.
                        </p>
                        <p>
                            If you're looking for a more comprehensive approach to finding promotional codes, consider using coupon websites such as Scoopreview. Coupon websites collect codes from a wide range of retailers, making it easy to search for discounts across multiple stores.
                        </p>
                        <h2>
                            Can I Use Multiple Coupon Codes On The Same Order?
                        </h2>
                        <p>
                            The ability to use multiple coupon codes on a single order can vary by retailer. Some stores may allow combining multiple coupons while others may only permit the use of one code per order. Attempting to use multiple codes on a single purchase may result in errors or the invalidation of the codes, so it's essential to read the terms and conditions carefully. It’s best to check the retailer’s coupon policy or terms and conditions to understand their specific rules.
                        </p>
                        <h2>
                            Do Discount Codes Have An Expiration Date?
                        </h2>
                        <p>
                            Yes, most discount codes come with an expiration date, which is the last day the code can be used to receive the associated discount or offer. If a code has expired, it will typically no longer work when entered during the checkout process, and the associated discount will not be applied to your purchase. It’s important to check the expiration date and use the coupon before it expires to ensure the discount is applied correctly.
                        </p>
                        <h2>
                            What Should I Do If A Coupon Doesn’t Work?
                        </h2>
                        <p>
                            If a coupon doesn’t seem to be working, there are a few things you can try:
                        </p>
                        <ul>
                            <li>Double-check that you're entering the code correctly.</li>
                            <li>Verify that the code has not expired.</li>
                            <li>Ensure the code is valid for the specific items in your cart or the minimum purchase amount.</li>
                            <li>Contact the retailer’s customer service if you continue to have issues with the code.</li>
                        </ul>
                        <h2>
                            What Kind Of Coupons & Deals Can I Find On Scoopreview?
                        </h2>
                        <p>
                            Scoopreview is your one-stop shop for online savings with a variety of top coupons and deals across a wide range of categories. Fashionistas can find discounts on trendy clothing and accessories from popular stores. Tech enthusiasts can grab deals on the latest gadgets and electronics. Scoopreview have coupons for travel websites, hotels, or even outdoor experiences. Here, you’ll get deals and offers on almost everything including homeware, furniture, and everyday essentials.
                        </p>
                        <h2>
                            Is There A Fee To Use Scoopreview?
                        </h2>
                        <p>
                            Scoopreview is completely free to use. We make money through affiliate commissions from stores when someone makes a purchase using a link from Scoopreview. When you click a link from Scoopreview to a store’s website and make a purchase, Scoopreview earns a commission. This affiliate commission structure of Scoopreview helps you find the best deals and coupons free of cost.
                        </p>
                        <h2>
                            Can I Get A Refund If I Use A Promo Code?
                        </h2>
                        <p>
                            The ability to get a refund when a promo code has been used can vary by retailer. Some stores may allow you to receive a refund for the full amount, while others may only refund the discounted price after the code has been applied. We recommend you check the retailer’s return and refund policies before making a purchase.
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