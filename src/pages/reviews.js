import { useState, useEffect } from "react";
import Header from './components/header';
import Footer from './components/footer';
import '@/styles/subcategories.css'
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Reviews({reviews}) {

  

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                    <div className="row">
                        <p><a href="./index.html">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></a> <a href="">Reviews</a></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid sub-categories">
                <div className="container col-lg-9 col-md-9 col-sm-9">
                    <div className="row">
                    {reviews.map((item,index) => 

                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                            <div className="shadow sub-categories-box">
                                <Link
                                    href={`/${item.slug}`}
                                >{item.render_name}</Link>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {

    
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/reviews`);
    const data = await response.json();
    return {
        props: {
            reviews: data 
        },
        revalidate: 10
    };
}