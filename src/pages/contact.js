
import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/contact.css'
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
            <section className="contactBox">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <h1 className="text-center">Contact Scoopreview</h1>
                            <form action="#NoWhere" className="contactForm row">
                                <div className="row p-0 inputGroup">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" placeholder="Name" className="form-control" name="name" required/>
                                    </div>
                                    <div class=" col-md-6 mb-3">
                                        <input type="text" placeholder="Email" className="form-control" name="email" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected> Select Visitor Type</option>
                                        <option value="1">Customer</option>
                                        <option value="2">Merchant</option>
                                        <option value="3">Non-Profit-Organization</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <textarea className="form-control" placeholder="Please provide some details" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="text-center contactBtn">
                                    <button className="btn" title="submit">Submit</button>
                                </div>
                            </form>
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