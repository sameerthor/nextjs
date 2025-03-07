
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
                            <h1 className="text-center">Scoopreview Cookie Policy</h1>
                            <h2>
                                 What are Cookies?
                            </h2>
                            <p>
                                Cookies are small files that a site or its service provider transfers to your device’s hard drive through your web browser, provided you grant permission. These cookies enable the site’s or service provider’s systems to recognize your browser and capture specific information.
                            </p>
                            <h2>
                                How We Use Cookies
                            </h2>
                            <p>
                                We use cookies to understand and retain your preferences for future visits, compile aggregate data regarding site traffic and site integration, and provide a superior site experience for our users. 
                            </p>
                            <h2>
                                Consent To Use Cookies
                            </h2>
                            <p>
                                By using the Scoopreview website, you consent to the use of cookies in accordance with our privacy policy. We use cookies for tracking information about how users interact with our site.
                            </p>
                            <h2>
                                Managing Cookies
                            </h2>
                            <p>
                                You can choose to have your browser notify you when cookies are being used or disable cookies through your browser settings. That said, deactivating cookies may impact the functionality of certain parts of our website.
                            </p>
                            <h2>
                                Changes To Cookie Policy
                            </h2>
                            <p>
                                Scoopreview reserves the right to amend or revise this cookie policy at any time. Your continued use of our website after any changes to this policy signifies your acceptance of the revised policy. 
                            </p>
                            <p>
                                For further inquiries regarding our cookie policy, kindly reach out to us at <a href="/contact">https://Scoopreview.com/contact</a>
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