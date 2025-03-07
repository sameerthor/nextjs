
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
                            <h1 className="text-center">Scoopreview Terms Of Use</h1>
                            <p>
                                Welcome to Scoopreview, a website where you can find coupons and discounts on a variety of products. By accessing and using our website, you agree to comply with the following terms of use. We advise you to thoroughly read the “Terms of Use'' as they hold vital information regarding your legal rights and responsibilities. For individuals residing in the United States, it is important to understand that our terms of service include an arbitration clause and a class action waiver. By accepting these terms of use, you agree to be bound by this arbitration provision. Before using our services, please carefully read the instructions outlined in these terms and conditions.
                            </p>
                            <h2>
                                Acceptance Of Terms
                            </h2>
                            <p>
                                By using Scoopreview website, you acknowledge that you have read, understand, and agree to be bound by these terms of use. If you do not agree with any of these Terms of Use, you are not authorized to use our services. Our Terms of Use are intended for all users, including those who are navigating the site or those who have a registered account.
                            </p>
                            <h2>
                                    Use Of Services
                            </h2>
                            <p>
                                You may use our website Scoopreview.com to browse, obtain, and redeem discount coupons and deals offered by various merchants. The legitimacy, accuracy, and completeness of any coupons or discounts are not guaranteed by Scoopreview. It is your responsibility to ensure that any discounts or coupons you get from our website are accurate and used appropriately. 
                            </p>
                            
                            <h2>
                                User Conduct
                            </h2>
                            <p>
                                You agree to use the Scoopreview website and services in accordance with all applicable laws and regulations. You also agree to not engage in any activity that interferes or disrupts our website or services. You may agree not to:

                            </p>
                            <ul>
                                <li>Use the platform for any illegal or unauthorized purpose.</li>
                                <li>Infringe upon the intellectual property of Scoopreview or any third party. </li>
                                <li>Manipulate or disrupt the platform's security. </li>
                                <li>Send any malicious programs, viruses, or other files.</li>
                                <li>Scrape or extract data from the platform without prior written consent.</li>
                                <li>Create or spread false or misleading content on the platform.</li>
                                <li>Violate another user's right to privacy.</li>
                            </ul>
                            <h2>Intellectual Property Rights</h2>
                            <p>
                                The content, trademark, logos, and other intellectual property displayed on the Scoopreview website are the property of Scoopreview or its licensors. You may not use, reproduce, or distribute any content from our website without prior written permission.
                            </p>
                            <h2>
                                Disclaimer Of Warranties
                            </h2>
                            <p>
                                Scoopreview provides its services on an “as is'' and “as available” basis. We do not make any warranties regarding the availability, accuracy, or reliability of our website or the deals and coupons provided.
                            </p>
                            <h2>
                                Limitation Of Liability
                            </h2>
                            <p>
                                In no circumstances shall Scoopreview be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our website or services.
                            </p>
                            <h2>
                                Governing Law
                            </h2>
                            <p>
                                These terms of use are governed and constructed under the laws of the United States, without regard to its conflict of law principles.
                            </p>
                            <h2>
                                Changes to Terms
                            </h2>
                            <p>
                                Scoopreview reserves the right to modify or revise these terms of use at any time. You are responsible for periodically reviewing the Terms of Use. Your continued use of our website after any changes to these terms constitutes your acceptance of the revised terms.
                            </p>
                            <p>
                                By using the Scoopreview website, you signify your agreement to these terms of use. If you do not agree to these terms and conditions, please do not use our website. If you have any questions about these terms, please contact us at  <a href="/contact">https://Scoopreview.com/contact</a>
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