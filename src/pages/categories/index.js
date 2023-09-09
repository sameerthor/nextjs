import { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/categories.css';
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        (async () => {

            const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/categories`);
            const data = await response.json();
            setCategories(data.categories);
        })();
    }, []);
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                    <div className="row">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/categories">Categories</Link></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid categories">
                <div className="container col-lg-9 col-md-9 col-sm-9">
                    <div className="row">
                        {categories.map((item) =>

                            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                <div className="shadow categories-box">
                                    <Link href={`/categories/${item.slug}`}>{item.name}</Link>
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