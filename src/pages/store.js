import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import '@/styles/store.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import moment from "moment";
import { useRouter } from 'next/router'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Store({ data }) {
    const router = useRouter()
    const [storedata, setStoredata] = useState(data);
    const [activetab, setActivetab] = useState("all");
    const [copytext, setCopytext] = useState("COPY")
    const [dealModaldata, setDealModaldata] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [couponModaldata, setCouponModaldata] = useState({});

    // const idJsonObject = {

    //     "@context": "http://schema.org",
    //     "@type": "Store",
    //     "name": data ? `${data.store.seo_title.trim()}` : '',
    //     "logo": `${publicRuntimeConfig.imageUrl}images/${data ? data.store.store_logo : ''}`,
    //     "image": `${publicRuntimeConfig.imageUrl}images/${data ? data.store.store_logo : ''}`,
    //     "description": data ? `${data.store.seo_desc}` : '',
    //     "url": publicRuntimeConfig.webUrl  + (data ? `${data.store.slug}` : ''),
    //     "brand": {
    //         "@type": "Brand",
    //         "name": "ScoopReview"
    //     },
    //     "event": {
    //         "@type": "SaleEvent",
    //         "name": data ? `${data.store.seo_title.trim()}` : '',
    //         "url": publicRuntimeConfig.webUrl  + (data ? `${data.store.slug}` : ''),
    //         "image":`${publicRuntimeConfig.imageUrl}images/${data ? data.store.store_logo : ''}`,
    //         "startDate": "2023-10-30",
    //         "endDate": "2023-12-30",
    //         "location": {
    //             "@type": "Place", "name": data ? `${data.store.seo_title.trim()}` : '',
    //             "address": { "@type": "PostalAddress", "streetAddress": data ? `${data.store.seo_title.trim()}` : '' }
    //         }
    //     },
    //     "address": {
    //         "@type": "PostalAddress",
    //         "streetAddress": data ? `${data.store.seo_title.trim()}` : ''
    //     },
    //     "offers": {
    //         "@type": "Offer",
    //         "url": publicRuntimeConfig.webUrl  + (data ? `${data.store.slug}` : ''),
    //         "priceCurrency": "USD",
    //         "seller": {
    //             "@type": "Organization",
    //             "name": (data ? `${data.store.seo_title.trim()} ${year}` : '')
    //         }
    //     },
    //     "breadcrumb": {
    //         "@type": "BreadcrumbList",
    //         "itemListElement":
    //             [{ "@type": "ListItem", "position": 1, "item": { "@id": publicRuntimeConfig.webUrl, "name": "ScoopReview" } },
    //             { "@type": "ListItem", "position": 2, "item": { "@id": `${publicRuntimeConfig.webUrl}coupons`, "name": "Deals" } },
    //             { "@type": "ListItem", "position": 3, "item": { "@id": `${publicRuntimeConfig.webUrl}${data ? data.store.web_url : ''}`, "name": data ? `${data.store.name.trim()}` : '' } },
    //             ]
    //     }
    // };


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    useEffect(() => {
        setStoredata(data);
        setActivetab("all");
    }, [data]);

    const changeTab = (tab) => {
        setActivetab(tab)
        if (tab == 'all') {
            setStoredata((prevState) => {
                const newState = { ...prevState }
                newState.coupon_h2 = data.coupon_h2;
                return newState
            });

        } else {
            let is_deal = tab == 'deals' ? 1 : 0;
            let coup = data.coupon_h2.filter((value) => value.is_deal === is_deal);
            setStoredata((prevState) => {
                const newState = { ...prevState }
                newState.coupon_h2 = coup;
                return newState
            });
        }
    }

    useEffect(() => {
        router.beforePopState(({ as }) => {
            $(".modal").modal("hide")
            return true;
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    useEffect(() => {
        $('.modal').on('hidden.bs.modal', function (e) {
            setCopytext("COPY");
        })
    }, []);

    const changeView = ((index) => {
        setStoredata((prevState) => {
            prevState.coupon_h2[index].is_more = (!storedata.coupon_h2[index].is_more);
            return ({
                ...prevState
            })
        });

    });

    return (
        <>
            {data && (<>
                <Head>
                    <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
                    <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                    <title>{`${data.store.seo_title} ${year}`}</title>
                    <meta name="description" content={`${data.store.seo_desc}`} />
                    <meta name="keywords" content={`${data.store.seo_keywords}`} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@" />
                    <meta name="twitter:title" content={`${data.store.seo_title} ${year}`} />
                    <meta name="twitter:description" content={`${data.store.seo_desc}`} />
                    <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}${data.store.slug}`} />

                    <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
                    <meta property="og:title" content={`${data.store.seo_title}`} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${publicRuntimeConfig.webUrl}${data.store.slug}`} />
                    <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}${data.store.store_logo}`} />
                    <meta property="og:site_name" content={`${data.meta.site_name.value}`} />
                    <meta property="og:description" content={`${data.store.seo_desc}`} />
                    <meta property="article:section" content={`${data.store.name}`} />
                    <meta property="article:modified_time" content={`${new Date(data.store.updated_at).toISOString()}`} />
                    <meta property="og:updated_time" content={`${new Date(data.store.updated_at).toISOString()}`} />
                    <link rel="canonical" href={`${publicRuntimeConfig.webUrl}${data.store.slug}`} />
                    {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }} /> */}
                </Head>
                <Header />
                <div className="container-fluid deal-bg">
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto">
                        <div className='d-flex'>
                            <p className='me-auto'><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/coupons">Deals <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <a href={`${storedata.store.web_url}`}>{storedata.store.name}</a></p>
                            <p className='ms-auto cat-name'><Link href={`categories/${Object.keys(data.allcat)[0]}`}>{data.allcat[Object.keys(data.allcat)[0]]}</Link></p>
                        </div>
                    </div>
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto deal-box">
                        <p className='ms-auto cat-coupon-name'><Link href={`categories/${Object.keys(data.allcat)[0]}`}>{data.allcat[Object.keys(data.allcat)[0]]}</Link></p>
                        <h1>{data.store.seo_title} {moment().format('YYYY')}</h1>
                        <p className="verified"><span className="check"><i className="fa fa-check-circle-o" aria-hidden="true"></i></span>Last
                            verified on <span>{moment().format('Do MMMM YYYY')}</span></p>
                        <div className="toggle-btn">
                            <button onClick={() => changeTab('all')} className={activetab == 'all' ? 'selected all' : 'all'}>All <span>{data.coupon_h2.length}</span></button>
                            <button onClick={() => changeTab('coupons')} className={activetab == 'coupons' ? 'selected coupons' : 'coupons'}>Coupons <span>{data.coupon_h2.filter(element => element.is_deal === 0).length}</span></button>
                            <button onClick={() => changeTab('deals')} className={activetab == 'deals' ? 'selected deals' : 'deals'}>Deals <span>{data.coupon_h2.filter(element => element.is_deal !== 0).length}</span></button>
                        </div>
                        {storedata.coupon_h2 && storedata.coupon_h2.map((item, index) =>
                            <div className="container col-lg-12 col-md-12 col-sm-12 mx-auto coupon-box" key={item.id}>
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col col-lg-9 col-md-9 col-sm-12 mx-auto">
                                        <div className="d-flex">
                                            <div className="image">
                                                <Image width={0} height={0} sizes="100vw"
                                                    style={{ width: '100%', height: 'auto' }} src={`${publicRuntimeConfig.imageUrl}images/${storedata.store.store_logo}`} alt="" />
                                                <p className="discount d-block text-center">{item.type_text}% <strong>off</strong></p>
                                            </div>
                                            <div className="content">
                                                <a id="store" href=""><h3>{item.title}</h3></a>
                                                <div className="d-flex">
                                                    <span id="code">{item.is_deal == '0' ? 'Code' : 'Deal'}</span>

                                                    {item.is_deal == '0' && <span id="noexp">No Expires</span>}
                                                </div>
                                                <p>{
                                                    item.descp.replace(/<\/?[^>]+(>|$)/g, "").length > 50 ? <>{
                                                        item.is_more === false ? item.descp.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 50) : item.descp.replace(/<\/?[^>]+(>|$)/g, "")}... <span onClick={() => changeView(index)} className='less_more'>{item.is_more === false ? 'more' : 'less'}</span>
                                                    </> : item.descp.replace(/<\/?[^>]+(>|$)/g, "")
                                                }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-3 col-md-3 col-sm-12 mx-auto">
                                        {
                                            item.is_deal == '0' ?
                                                <button className="submit d-flex" data-bs-toggle="modal" onClick={(e) => { setCouponModaldata(item), window.open(storedata.store.aff_url && storedata.store.aff_url, '_blank') }} data-bs-target="#codePopup" type="button">GET CODE<i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                                :
                                                <button className="submit d-flex" data-bs-toggle="modal" onClick={(e) => { setDealModaldata(item), window.open(storedata.store.aff_url) }} data-bs-target="#dealPopup" type="button">GET DEAL <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>

                                        }
                                        <div className="icon-success">
                                            <div className="" id="icons">
                                                <span className="face">
                                                    <span className="smile" data-bs-toggle="tooltip modal" data-bs-target="#itWorked" data-bs-placement="top" title="This Worked!"><i className="fa fa-smile-o" aria-hidden="true"></i></span>
                                                    <span className="sad" data-bs-toggle="tooltip modal" data-bs-target="#itDidNotWork" data-bs-placement="top" title="It didn't Work"><i className="fa fa-frown-o" aria-hidden="true"></i></span>
                                                    <span className="star" data-bs-toggle="tooltip modal" data-bs-target="#saveCoupon" data-bs-placement="top" title="Save this coupon"><i className="fa fa-star-o" aria-hidden="true"></i></span>
                                                </span>
                                            </div>
                                            <p className="success mt-2"> {item.percent}% success</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        item.is_deal != '0' ?
                                            ''
                                            : <p id="msg"><span id="lock"><i className="fa fa-lock" aria-hidden="true"></i></span><span id="excl">Exclusive:</span> This coupon can only be found at our website.</p>
                                    }
                                    <div className="impression d-flex">
                                        <div>
                                            <span><i className="fa fa-wifi" aria-hidden="true"></i>{item.used} Used - {item.today_used} Today</span>
                                            <button type="button" className="modal-btn" data-bs-toggle="modal" data-bs-target="#shareCoupon" data-bs-whatever="@mdo"><span><i className="fa fa-share-alt" aria-hidden="true"></i><span id="hide">share</span></span></button>
                                        </div>
                                        <div className="ms-auto">
                                            <button type="button" className="modal-btn" data-bs-toggle="modal" data-bs-target="#sendEmail" data-bs-whatever="@mdo"><span><i className="fa fa-envelope-o" aria-hidden="true"></i><span id="hide">Email</span></span></button>
                                            <button type="button" className="modal-btn" data-bs-toggle="modal" data-bs-target="#newComment" data-bs-whatever="@mdo"><span><i className="fa fa-comments-o" aria-hidden="true"></i><span id="hide">0 Comments</span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                        <div className="container col-lg-12 col-md-12 col-sm-12 mx-auto shadow-sm best-coupons">
                            <h3>Best {data.store.name} Coupon Codes</h3>
                            <span className="d-block d-md-none last-update">Updated on {moment().format('YYYY-MM-DD')}</span>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Discount</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th className="">Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.coupon_h2 && data.coupon_h2.map((item, index) => {
                                        if (index <= 2)
                                            return (
                                                <tr key={item.id}>
                                                    <td> {item.type_text}% OFF</td>
                                                    {/* <td className='description'>{item.title}</td> */}
                                                    <td>{storedata.store.name} Coupon & Discount Code</td>
                                                    <td><strong>Active</strong></td>
                                                    <td className="">{moment().format('YYYY-MM-DD')}</td>
                                                </tr>);
                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto shadow-sm coupon-details">
                        <div className="about-coupons">
                            <h2>About {storedata.store.name} Coupons</h2>
                            <div className="store-info"
                                dangerouslySetInnerHTML={{ __html: storedata.store.desc.match(/^[^<]*/)[0] }}
                            />
                        </div>
                        {
                            storedata.faqs.length > 0 &&
                            <>
                                <h2 className="faq-title">{storedata.store.name} <span>FAQs</span></h2>

                                <div className="fnq">
                                    {
                                        storedata.faqs && storedata.faqs.map((item) =>
                                            <div key={item.id}>
                                                <h3 className="faq-question">{item.faq_question}</h3>

                                                <div className="faq-answer"
                                                    dangerouslySetInnerHTML={{ __html: item.faq_answer }}
                                                />
                                            </div>

                                        )}
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto shadow-sm related-store">
                        <div className="row store-box">
                            <h3 className='text-center mb-4'>Related Store</h3>
                            {
                                storedata.rstores && storedata.rstores.map((item) =>
                                    <div className="col-lg-4 col-md-6 col-sm-6 store-item" key={item.id}>
                                        <Link className="text-center" href={`/${item.slug}`}><i className="fa fa-check-circle-o" aria-hidden="true"></i> {item.name}</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="container-fluid">
                    <div className="container col-sm-11 col-md-8 col-lg-8 mx-auto shadow-sm popular">
                        <h3>Popular Stores</h3>
                        <div className="row row-cols-2 row-cols-md-3  gx-4">
                            {
                                storedata.pstores && storedata.pstores.map((item) =>
                                    <div className="col ppl-str" key={item.id}>
                                        <div className='ppl-box'>
                                            <Link href={`/${item.slug}`}>
                                                <Image width={0} height={0} sizes="100vw"
                                                    style={{ width: '100%', height: 'auto' }} src={`${publicRuntimeConfig.imageUrl}images/${item.store_logo}`} alt={item.name} />
                                            </Link>
                                            <p className="text-center">{item.name}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div> */}
                <div className="modal fade" id="dealPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center" id="exampleModalLabel">{dealModaldata.title && dealModaldata.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                <span id="showCode">Deal Activated</span>
                            </div>
                            <div>
                                <h5 className="modal-info text-center">No Coupon Code Required</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={(e) => window.open(storedata.store.aff_url && storedata.store.aff_url)} className="btn btn-warning text-white">Visit Store</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="codePopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{couponModaldata.title && couponModaldata.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                <span id="showCode">{couponModaldata.coupon_code && couponModaldata.coupon_code}</span>
                            </div>
                            <div>
                                <h5 className="modal-info text-center">Select The Coupon Code & Hit Copy Button to Copy Your Code</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={(e) => { navigator.clipboard.writeText(couponModaldata.coupon_code && couponModaldata.coupon_code); setCopytext("COPIED!") }}
                                >{copytext}</button>
                                <button type="button" onClick={(e) => window.location.href = storedata.store.aff_url && storedata.store.aff_url} className="btn btn-warning text-white">Visit Store</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="itWorked" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content feedback-content">
                            <div className="modal-body logout-body text-center">
                                <Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src="/assets/smile.svg" alt="smile-img" />
                                <h2>Thank You!</h2>
                                <p className="feedback-msg">Your feedback is important to us!</p>
                                <a type="button" className="btn btn-secondary dismiss" data-bs-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="itDidNotWork" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content feedback-content">
                            <div className="modal-body logout-body text-center">
                                {/* <Image width={0} height={0} sizes="100vw"
                                                    style={{ width: '100%', height: 'auto' }} src="./assets/sad.png" alt="smile-img" /> */}
                                <h2>Did'nt Worked?</h2>
                                <p className="bg-warning text-white">Please let us know your concern in comment section.<br />Our team will verify this coupon on immidiate effect.</p>
                                <p className="feedback-msg">Your feedback is important to us!</p>
                                <a type="button" className="btn btn-secondary dismiss" data-bs-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="saveCoupon" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content feedback-content">
                            <div className="modal-body logout-body text-center">
                                <Image width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} src="/assets/star.svg" alt="smile-img" />
                                <h2>Thank You!</h2>
                                <p>We Saved this coupon for you.</p>
                                <a type="button" className="btn btn-secondary dismiss" data-bs-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
            )}
        </>
    )
}