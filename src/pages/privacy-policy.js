
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
                            <h1 className="text-center">Scoopreview Privacy Policy</h1>
                            <p>
                                 At Scoopreview, we consider the privacy and security of our user’s personal information to be of the utmost importance. This privacy policy outlines our practices regarding the collection, use, and protection of your personal data information when you use our website. We inform you about your privacy rights and how the law protects you.
                            </p> 
                            <h2>
                                Information We Collect
                            </h2>
                            <p>
                                 When you interact with Scoopreview, we may collect certain personal information, such as your name, email address, and location. We also gather non-personal information including your browser type, operating system, and IP address. This information is collected to provide you with a personalized experience and to improve our services. If you provide your personal information, rest assured that it will never be sold or shared.
                            </p>
                            <h2>
                                Use Of Personal Information
                            </h2>
                            <p>
                                The information we collect is used to personalize the deals, coupons, and promotional offers we provide to you based on your preferences and location Additionally, your personal information may be used to communicate with you about our services, partnered merchants, news, special offers, coupons, and updates. It helps us to respond to your queries and enhance your overall experience with Scoopreview. If you do not accept our policies, please don’t register, subscribe, create an account, or interact with the Scoopreview services. In case you agree to our Privacy Policy, we may provide you with advertisements through our services, third-party sites, texts, notifications, or other communication methods.
                            </p>
                             <h2>
                             Disclosure of Information
                             </h2>
                             <p>
                             We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share non-personal information with trusted third parties to analyze user behavior and improve our services. These third parties are required to maintain the confidentiality of your information and are not permitted to use it for any other purpose. 
                             </p>
                             <h2>
                             Data Security
                             </h2>
                             <p>
                                We take the security of your information very seriously and implement a variety of security measures to safeguard your data. We use encryption and secure socket layer (SSL) technology to protect your personal information from unauthorized access. Additionally, access to your personal information is restricted to authorized personnel only who are required to keep the information confidential.
                             </p>
                             <h2>
                             Cookies or Browser Cookies
                             </h2>
                             

                             <p>
                             Scoopreview may use cookies and similar tracking technologies to enhance your user experience on our site. These cookies allow us to capture and remember your preferences, analyze site traffic, and provide personalized content. By using our website, you consent to the use of cookies in accordance with this privacy policy.
                             </p>
                             <h2>
                             Delete Your Personal Data

                             </h2>

                             <p>
                             You have the right to access, update, and delete your account anytime. If you decide to exercise this right, please let us know using the information provided at the bottom of this privacy policy. We help you in deleting the Personal Data that we have collected. You may update, modify, or delete your data by signing in to your account and visiting the account settings section. You also have the option to opt out of receiving certain communications from us, such as promotional emails.
                             </p>
                             <h2>
                                Third-Party Links
                             </h2>
                             <p>
                             Scoopreview contain links to other websites that are not operated or run by us. Other website links that are available on our platform may have their privacy policies and personal data collection, use, and disclosure policies. We haven't any control over and are not responsible for the privacy policies, content, or practices of any third-party websites or services. We strongly recommend you read their privacy statement before sharing any information or taking advantage of promotional offers through third-party links.
                             </p>
                             <h2>
                             Children's Privacy
                            </h2>
                             <p>
                             Scoopreview does not knowingly collect personal information from children under the age of 13. Our services are­ created and meant for adults above 13 years only. Accessing our site means you confirm you’re 13 or older, and understand the age requirements for creating an account and online purchasing advertised through the services. If we become aware that we have collected personal information from a child under the age of thirteen (13), we will take steps to delete the information from our records. 
                             </p>
                             <h2>
                             Changes To Our Privacy Policy

                                </h2>
                             <p>
                             If needed, Scoopreview reserves the right to modify or update this Privacy Policy at any time. We will notify you of any changes by posting the new privacy policy on this page. This way, you can get more benefits from our service. It is recommended to review this privacy policy page periodically for any updates. Any modification to this privacy statement takes effect instantly upon being published on this page. 
                             </p>
                             <h2>
                             Contact Us

                                </h2>
                             <p>
                             If you have any questions about our privacy policy, the practices of Scoopreview, or your dealings with our website, please contact us at <a href="/contact/">https://Scoopreview.com/contact/</a>
                             </p>
                             <p></p>
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