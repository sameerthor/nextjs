import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import 'semantic-ui-css/semantic.min.css'
import '@/styles/special.css';
import Link from 'next/link';
import getConfig from 'next/config'
import { Search } from 'semantic-ui-react'
const { publicRuntimeConfig } = getConfig()
import { useRouter } from 'next/router'


const specials = []
export default function Special({ data }) {
    const { asPath } = useRouter()
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');

    const handleSearchChange = (e, searchdata) => {
        setLoading(true);
        var keyword = searchdata.value;
        setValue(searchdata.value);
        const filtered = data.special.filter(entry => entry.title.toLowerCase().includes(keyword.toLowerCase()));
        if(filtered.length>0)
        {
           setResults(filtered);
        }else{
            setResults([]);
        }
        setLoading(false);
    }

    return (
        data && (
            <>
                <Header />
                <div id="couponHeader" style={{ backgroundImage: (`url(${publicRuntimeConfig.apiBaseUrl}images/${data.bg[0].bg})`) }}>
                    <div className="container">
                        <div className="d-flex coupon-search justify-content-center align-items-center">
                            <Search
                                fluid
                                loading={loading}
                                input={{ fluid: true }}
                                placeholder={`Search ${data.category}`}
                                onResultSelect={(e, data) =>{
                                    setValue(data.result.title);window.location.replace(data.result.aff_url);

                                }}
                                onSearchChange={handleSearchChange}
                                results={results}
                                value={value}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid navigation-box">
                    <div className="container col-lg-10 col-md-10 col-sm-10 navigation">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href={asPath}>{data.category}</Link></p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container col-lg-10 col-md-10 col-sm-10 latest-deal">
                        <div className="row">
                            {data.special.map((item) =>
                                <div className="col-lg-3 col-md-6 col-sm-12 latest-box" key={item.id}>
                                    <div className="latest-items shadow">
                                        <a className="shadow-sm" target='_blank' href={`${item.aff_url}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.store_logo}`} alt="" /></a>
                                        <a href={`${item.aff_url}`} target='_blank'> <h3>{item.title}</h3></a>
                                        <p>{item.descp}</p>
                                        <a target='_blank' href={`${item.aff_url}`}>Get Deal <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container col-lg-10 col-md-10 col-sm-10">
                        <div className="row">
                            <div className="more-coupons">
                                <Link className="shadow" href="">See also: New Year Coupons and Discount Code</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>)
    )
}