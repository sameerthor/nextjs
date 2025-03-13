import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import '@/styles/store.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import { Item } from 'semantic-ui-react';

const { publicRuntimeConfig } = getConfig()
const RatingBox = dynamic(() => import('@/components/ratingbox'),
    {
        ssr: true,
    });
const getHeading = (title) => {
    if (!title) return "";

    // Check for percentage discount (e.g., "40% OFF")
    const percentMatch = title.match(/(\d+)%/);
    if (percentMatch) {
        return `${percentMatch[1]}% <br /> OFF`;
    }

    // Check for dollar discount (e.g., "$40 OFF")
    const dollarMatch = title.match(/\$(\d+)/);
    if (dollarMatch) {
        return `$${dollarMatch[1]} <br /> OFF`;
    }

    // Check for "Free Shipping"
    if (/free shipping/i.test(title)) {
        return "Free  <br /> Shipping";
    }

    return "";
};
export default function Store({ data }) {

    const router = useRouter()
    const [storedata, setStoredata] = useState(data);

    console.log(storedata);
    const [activetab, setActivetab] = useState("all");
    const [copytext, setCopytext] = useState("COPY")
    const [dealModaldata, setDealModaldata] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [couponModaldata, setCouponModaldata] = useState({});


    const [visibleCommentBoxes, setVisibleCommentBoxes] = useState({});


    if (data) {
        var per = getHeading(storedata.ecoupons[0].title).replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, '');
        const store_names = storedata.rstores.filter(f => f.id !== storedata.store.id).slice(0, 2).map(item => `<a href="/${item.slug}">${item.name}</a>`)

        storedata.store.desc = storedata.store.desc.replaceAll("%%storename%%", storedata.store.name);
        storedata.store.desc = storedata.store.desc.replaceAll("%pe­rcentage% off", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%percentage% off", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%pe­rcentage% Off", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%percentage% Off", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%pe­rcentage% OFF", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%percentage% OFF", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%pe­rcentage%", per);
        storedata.store.desc = storedata.store.desc.replaceAll("%percentage%", per);
        storedata.store.desc = storedata.store.desc.replace(/XXX/, storedata.ecoupons.filter(x => x.is_deal != '1').length > 0 ? storedata.ecoupons.filter(x => x.is_deal != '1')[0].coupon_code : "");
        storedata.store.desc = storedata.store.desc.replace(/XX/, storedata.ecoupons.length);
        storedata.store.desc = storedata.store.desc.replace('XXX', storedata.ecoupons.filter(x => x.is_deal != '1').length > 0 ? storedata.ecoupons.filter(x => x.is_deal != '1')[0].coupon_code : "");
        storedata.store.desc = storedata.store.desc.replace('XX', storedata.ecoupons.length);
        storedata.store.desc = storedata.store.desc.replaceAll("%%currentmonth%%", moment().format('MMMM'));
        storedata.store.desc = storedata.store.desc.replaceAll("%%curre­ntmonth%%", moment().format('MMMM'));
        storedata.store.desc = storedata.store.desc.replaceAll("%%currentyear%%", moment().format('YYYY'));
        storedata.store.desc = storedata.store.desc.replaceAll("currentyear%%", moment().format('YYYY'));
        storedata.store.desc = storedata.store.desc.replaceAll(/%%categorystore%% and %%categorystore%%|%categorystore%, %categorystore%, and %categorystore%|%categorystore%, %categorystore%|%categorystore% and %categorystore%|%%categorystore%%, %%categorystore%%|%categorystore%, %categorystore%, %categorystore%|%categorystore% %categorystore%, %categorystore%|%categorystore% %categorystore% %categorystore%|%categorystore% %categorystore% and %categorystore%/gi, store_names.join(", "));
        storedata.faqs.forEach(faq => {
            faq.faq_answer = faq.faq_answer.replace('XXX', storedata.ecoupons.filter(x => x.is_deal != '1').length > 0 ? storedata.ecoupons.filter(x => x.is_deal != '1')[0].coupon_code : "");
            faq.faq_answer = faq.faq_answer.replace('XX', storedata.ecoupons.length);
        });
    }
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
                    <title>{`${data.store.seo_title}`}</title>
                    <meta name="description" content={`${data.store.seo_desc}`} />
                    <meta name="keywords" content={`${data.store.seo_keywords}`} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@" />
                    <meta name="twitter:title" content={`${data.store.seo_title}`} />
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
                <div className="deal-bg">
                    <div className="container">
                        {/* <div className='d-flex'>
                            <p className='me-auto'><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/coupons">Deals <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <a href={`${storedata.store.web_url}`}>{storedata.store.name}</a></p>
                            <p className='ms-auto cat-name'><Link href={`categories/${Object.keys(data.allcat)[0]}`}>{data.allcat[Object.keys(data.allcat)[0]]}</Link></p>
                        </div> */}
                        <div className="affiDisc"><p>scoopreview may earn a commission when you use coupons on this page. <a href="/affiliate-disclosure">Learn More</a></p></div>
                        <div className="breadcrumb">
                            <ul>
                                <li><a href="/">scoopReview.com</a> <i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
                                <li>{storedata.store.name}</li>
                            </ul>
                            <div className="storeCat">
                                <a href={`categories/${Object.keys(data.allcat)[0]}`}>{data.allcat[Object.keys(data.allcat)[0]]}</a>
                            </div>
                        </div>
                        <>
                            <div className="contentBox">
                                <div className="storeHeader row row-cols-2">
                                    <div className="header-content col-8 p-0">
                                        <h1>
                                            {storedata.store.h1keyword}
                                        </h1>
                                        <h2 className="dealAvl" id="12_Codes_&_0_Deals_available">
                                            {`${storedata.ecoupons.filter(c => c.is_deal === 0).length} Codes & ${storedata.ecoupons.filter(c => c.is_deal === 1).length} Deals available`.replace(/^0 Codes & | & 0 Deals|^0 Codes$|^0 Deals$/, '')}
                                        </h2>
                                        <div class="topdisc"><p>{per} at this {storedata.store.name}</p></div>
                                    </div>
                                    <aside className="col-4 p-0">
                                        <div className="header-thumb">
                                            <div className="header-store-thumb">
                                                <a rel="nofollow" target="_blank" title="#" href="#">
                                                    <img
                                                        loading="lazy"
                                                        width={100}
                                                        height={100}
                                                        decoding="async"
                                                        data-nimg={1}
                                                        src={`${publicRuntimeConfig.imageUrl}` + 'images/' + storedata.store.store_logo}
                                                    />
                                                </a>
                                                <RatingBox key={'store_' + storedata.store.id} store={storedata} />

                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="listCoupns">
                                {storedata.ecoupons.map((item, index) => {
                                    // Create dynamic and unique IDs using the index
                                    const accordionId = `accordion-${index}`;
                                    const collapseId = `collapse-${index}`;

                                    return (
                                        <div className="hugecouponBox" key={index}>
                                            <div className="coupon-item">
                                                <div className="discountBox">
                                                    <div className="offBox">
                                                        <div dangerouslySetInnerHTML={{ __html: getHeading(item.title) }} />
                                                    </div>
                                                    <div className="isValid">
                                                        <span>Verified</span>
                                                        <span>
                                                            <svg
                                                                data-bbox="27.999 25 143.499 149.925"
                                                                viewBox="27.999 25 143.499 149.925"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-type="shape"
                                                                role="img"
                                                                aria-label="Verified"
                                                            >
                                                                <g>
                                                                    <path d="M91.301 122.708 71.46 102.867l5.891-5.892 13.95 13.95 30.842-30.842 5.891 5.892-36.733 36.733Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="coupnBox">
                                                    <div className="coupondesc">
                                                        <div>
                                                            <div className="svgBox">
                                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.2735 6.60866L7.38683 0.721994C7.14016 0.475327 6.80016 0.335327 6.44683 0.335327H1.66683C0.933496 0.335327 0.333496 0.935327 0.333496 1.66866V6.44866C0.333496 6.80199 0.473496 7.14199 0.726829 7.38866L6.6135 13.2753C7.1335 13.7953 7.98016 13.7953 8.50016 13.2753L13.2802 8.49533C13.8002 7.97533 13.8002 7.13533 13.2735 6.60866ZM3.3335 4.33533C2.78016 4.33533 2.3335 3.88866 2.3335 3.33533C2.3335 2.78199 2.78016 2.33533 3.3335 2.33533C3.88683 2.33533 4.3335 2.78199 4.3335 3.33533C4.3335 3.88866 3.88683 4.33533 3.3335 4.33533Z" fill="#1A1A1A" />
                                                                </svg>
                                                                <span>{item.is_deal == "1" ? "deal" : "code"}</span>
                                                            </div>

                                                            <p>
                                                                <a href="#">{item.title}</a>
                                                            </p>
                                                            <p class="couponDesc">{item.descp}</p>

                                                            <div className="couponBtndesc">
                                                                <button data-bs-toggle="modal" data-bs-target="#dealPopup">
                                                                    Get Deal
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="termsBox">
                                                            <a href="#" data-bs-toggle="collapse" className="btn font-weight-bold" data-bs-target={`#${collapseId}`}>
                                                                Terms & Conditions
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="couponBtn">
                                                        {item.is_deal == "0" ? (
                                                            <button
                                                                className="submit d-flex"
                                                                data-bs-toggle="modal"
                                                                onClick={() => {
                                                                    setCouponModaldata(item);
                                                                    window.open(storedata.store.aff_url, "_blank");
                                                                }}
                                                                data-bs-target="#codePopup"
                                                                type="button"
                                                            >
                                                                GET CODE<i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="submit d-flex"
                                                                data-bs-toggle="modal"
                                                                onClick={() => {
                                                                    setDealModaldata(item);
                                                                    window.open(storedata.store.aff_url, "_blank");
                                                                }}
                                                                data-bs-target="#dealPopup"
                                                                type="button"
                                                            >
                                                                GET DEAL <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                            </button>
                                                        )}
                                                        <div className="termsBox">
                                                            {item.expiry_date && <p>Expires: {moment.unix(item.expiry_date).format("MM/DD/YYYY")}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Dynamic Accordion */}
                                            <div id={accordionId} className="accordion">
                                                <div id={collapseId} className="collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#${accordionId}`}>
                                                    <div className="card-body">
                                                        <div className="tNcBox">
                                                            <div dangerouslySetInnerHTML={{ __html: item.term_condition }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>


                        </>
                        {/* store discription */}
                        <div className="storeDtl">
                            <div className="container">
                                < h3 className='abtStore'>About {storedata.store.name}</h3>
                                <div className="review">
                                    <div className="write-review">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: storedata.store.desc }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='offerToday'>
                            <h3>Today's {storedata.store.name} Offer</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>🛍️ Total Offers</td>
                                        <td className="text-right font-medium">{storedata.ecoupons && storedata.ecoupons.length}</td>
                                    </tr>
                                    <tr>
                                        <td>🏷️ Active Coupon Codes</td>
                                        <td className="text-right font-medium">{storedata.ecoupons.filter(x => x.is_deal == '0').length}</td>
                                    </tr>
                                    <tr>
                                        <td>🛒 Free Shipping</td>
                                        <td className="text-right font-medium">{storedata.ecoupons.filter(x => x.title.toLowerCase().includes("shipping")).length}</td>
                                    </tr>
                                    <tr>
                                        <td>🔥 Best Offer</td>
                                        <td className="text-right font-medium">Flat {storedata.ecoupons && storedata.ecoupons[0].title}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* contact us */}
                        {storedata.store.contact &&
                            <div className='contactBox'>
                                <h3>Contact {storedata.store.name}</h3>
                                <p>{storedata.store.contact}</p>
                            </div>
                        }
                        {/* faq */}
                        <div className="storeDtl">
                            <div className="container">
                                <h3 className='faqsHeading'>FAQs for {storedata.store.name}</h3>
                                <div className="review">
                                    <div className="write-review">
                                        <div id="fAq">
                                            {storedata.faqs.map((item) => {
                                                return (<>
                                                    <div className="faq_block">
                                                        <h3 className="faq_question">{item.faq_question}</h3>
                                                        <p className="faq_answer">{item.faq_answer}</p>
                                                    </div>
                                                </>);
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* coupon summary */}
                        <div className="tableContainer">
                            <h3>Coupon Summary for  {storedata.store.name}</h3>
                            <table border="1" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td width="20%"><strong>Deal</strong></td>
                                        <td width="60%"><strong>Title</strong></td>
                                        <td width="20%"><strong>Coupon</strong></td>
                                    </tr>
                                    {storedata.ecoupons.map((item) =>
                                        <tr>
                                            <td>{getHeading(item.title).replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, '')}</td>
                                            <td>
                                                <p>{item.descp}</p>
                                            </td>
                                            <td>{item.is_deal == 1 ? "Hot Deal ️‍🔥" : item.coupon_code}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <div className="storeDtl">
                    <div className="container">
                        <div className="review">
                            <div className="write-review">
                                <div dangerouslySetInnerHTML={{ __html: storedata.store.desc }} />

                                {/* Only render FAQ section if there are FAQs available */}
                                {storedata.faqs && storedata.faqs.length > 0 && (
                                    <div id="fAq">
                                        {storedata.faqs.map((item, index) => (
                                            <div key={index} className="faq_block">
                                                <h3 className="faq_question">{item.faq_question}?</h3>
                                                <p className="faq_answer">{item.faq_answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='commentSection'>
                    <div className='container'>
                        <div id="accordion">
                            <div className="card">
                                <div className="" id="headingOne">
                                    <span>
                                        <button data-bs-toggle="collapse" id="commentBtn" data-bs-target="#collapseComment" aria-expanded="true" aria-controls="collapseOne">
                                            Show Comment
                                        </button>
                                    </span>
                                </div>

                                <div id="collapseComment" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="commentbox">
                                            <div className="row comment mx-auto">
                                                <h3>Let other know how much you saved</h3>
                                                <p>
                                                    Your email address will not be published. Required fields are
                                                    marked <span>*</span>
                                                </p>
                                            </div>
                                            <div className="row input mx-auto">
                                                <form className="d-block" role="post">
                                                    <textarea
                                                        name=""
                                                        className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                        rows={10}
                                                        placeholder="Input your thought ..."
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                    <label htmlFor="name" className="d-block">
                                                        <i className="fa-regular fa-user" /> Name <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        required=""
                                                        className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                    />
                                                    <label htmlFor="email" className="d-block">
                                                        <i className="fa-regular fa-envelope" /> Email <span>*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                        placeholder="Enter your email address"
                                                        required=""
                                                    />
                                                    <label htmlFor="url" className="d-block">
                                                        <i className="fa-solid fa-globe" /> Website
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                        placeholder="website url"
                                                    />
                                                    <button type="submit" onclick="">
                                                        Post Comment
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        {/* user comment */}
                                        <div className="comment-section">
                                            <div className="comment">
                                                <div className="avatar">J</div>
                                                <div className="comment-content">
                                                    <div className="comment-header">
                                                        <span className="comment-author">John Doe</span>
                                                        <span className="comment-time">2 hours ago</span>
                                                    </div>
                                                    <p className="comment-text">This modern comment section is stylish and interactive!</p>
                                                </div>
                                            </div>

                                            <div className="comment">
                                                <div className="avatar">J</div>
                                                <div className="comment-content">
                                                    <div className="comment-header">
                                                        <span className="comment-author">Jane Smith</span>
                                                        <span className="comment-time">1 hour ago</span>
                                                    </div>
                                                    <p className="comment-text">I love how smooth and responsive it is!</p>
                                                </div>
                                            </div>

                                            <form class="comment-form">
                                                <input type="text" className="comment-input" placeholder="Reply a comment..." />
                                                <button type="submit" className="comment-btn">Post</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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