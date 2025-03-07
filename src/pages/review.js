import { useState, useEffect } from 'react';
import '@/styles/review.css';
import Header from '../components/header';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Reviews({ data }) {
    
    const router = useRouter()
    const [reviewdata, setReviewdata] = useState(data);
    const [dealModaldata, setDealModaldata] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [copytext, setCopytext] = useState("COPY")
    const [couponModaldata, setCouponModaldata] = useState({});
    if (data == null) {
        return '';
    }

    // const idJsonObject = {
    //     "@context": "https://schema.org/",
    //     "@type": "Product",
    //     "name": data ? `${data.review.seo_title.trim()}` : '',
    //     "brand": {
    //         "@type": "Brand",
    //         "name": data ? data.review.render_name : ""
    //     },
    //     "description": data ? `${data.review.seo_desc}` : '',
    //     "image": data ? `${publicRuntimeConfig.imageUrl}${data.review.review_logo}` : '',
    //     "url": `${publicRuntimeConfig.webUrl}${data.review.slug}`,
    //     "review": [{
    //         "@type": "Review",
    //         "reviewRating": {
    //             "@type": "Rating",
    //             "ratingValue": "5"
    //         },
    //         "author": {
    //             "@type": "Organisation",
    //             "name": "ScoopReview"
    //         }
    //     }],
    //     "article": {
    //         "@type": "Article",
    //         "mainEntityOfPage":
    //         {
    //             "@type": "WebPage",
    //             "@id": `${publicRuntimeConfig.webUrl}${data.review.slug}`
    //         },
    //         "headline": data ? `${data.review.seo_title.trim()}` : '',
    //         "url": `${publicRuntimeConfig.webUrl}${data.review.slug}`,
    //         "thumbnailUrl": data ? `${publicRuntimeConfig.imageUrl}${data.review.review_logo}` : '',
    //         "image": {
    //             "@type": "ImageObject", "url": data ? `${publicRuntimeConfig.imageUrl}${data.review.review_logo}` : '',
    //             "height": 2400, "width": 2000
    //         }, "datePublished": "2022-11-07T21:29:32.000Z",
    //         "dateModified": "2022-11-07T21:29:32.000Z",
    //         "author": { "@type": "Organisation", "name": "ScoopReview" },
    //         "creator": ["ScoopReview"],
    //         "keywords": data ? data.review.seo_keywords.split(',') : '',
    //         "publisher": {
    //             "@type": "Organization", "name": "ScoopReview",
    //             "logo": {
    //                 "@type": "ImageObject",
    //                 "url": data ? `${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}` : '',
    //                 "width": 54, "height": 54
    //             }
    //         },
    //         "description": data ? `${data.review.seo_desc}` : ''
    //     },
    //     "breadcrumb": {
    //         "@type": "BreadcrumbList",
    //         "itemListElement":
    //             [{ "@type": "ListItem", "position": 1, "item": { "@id": publicRuntimeConfig.webUrl, "name": "ScoopReview" } },
    //             { "@type": "ListItem", "position": 2, "item": { "@id": `${publicRuntimeConfig.webUrl}reviews`, "name": "Reviews" } },
    //             { "@type": "ListItem", "position": 3, "item": { "@id": `${publicRuntimeConfig.webUrl}${data ? reviewdata.review.slug : ''}`, "name": data ? `${reviewdata.review.render_name.trim()}}` : '' } },
    //             ]
    //     }


    // };
    

    const changeView = ((index) => {
        setReviewdata((prevState) => {
            prevState.pcoupons_above[index].is_more = (!reviewdata.pcoupons_above[index].is_more);
            return ({
                ...prevState
            })
        });

    });


    useEffect(() => {
        setReviewdata(data)
    }, [data]);




    useEffect(() => {
        $(document).ready(function () {
            $('.blog-content-box h2 span, .blog-content-box h3 span, .blog-content-box h4 span, .blog-content-box h5 span, .blog-content-box p span .blog-content-box p').removeAttr('style');
            $('.blog-content-box h2, .blog-content-box h3, .blog-content-box h4, .blog-content-box h5').addClass('my-3');
            $('.blog-content-box img').addClass('my-5');

            $('.blog-like .fa-thumbs-o-up').on('click', function (e) {
                e.preventDefault();
                let like = $('.blog-like').text();
                let data = parseInt(like) + 1;
                $('.blog-like').html('<i className="fa fa-thumbs-up" aria-hidden="true"></i> ' + data);
            })

            const h1Tags = document.querySelectorAll('h1');
            const h2Tags = document.querySelectorAll('h2');
            const h3Tags = document.querySelectorAll('h3');
            const h4Tags = document.querySelectorAll('h4');
            var content = [];
            var elementId;

            if (h2Tags.length > 0) {
                for (const i in h2Tags) {
                    if (Object.hasOwnProperty.call(h2Tags, i)) {
                        const element = h2Tags[i].innerText;
                        elementId = element.replaceAll(' ', '_');
                        h2Tags[i].setAttribute('id', elementId);
                        content += "<li><a class='font-weight-bold' href='#" + elementId + " ' rel='nofollow'><u>" +
                            element +
                            "</u></a></li>";
                    }
                    $('#tableofcontents').html(content);
                }
            }
            if (h3Tags.length > 0) {

                for (const i in h3Tags) {
                    if (Object.hasOwnProperty.call(h3Tags, i)) {
                        const element = h3Tags[i].innerText;
                        elementId = element.replaceAll(' ', '_');
                        h3Tags[i].setAttribute('id', elementId);
                        content += "<li><a class='font-weight-bold' href='#" + elementId + " ' rel='nofollow'><u>" +
                            element +
                            "</u></a></li>";
                    }
                    $('#tableofcontents').html(content);
                }
            }
            if (h4Tags.length > 0) {

                for (const i in h4Tags) {
                    if (Object.hasOwnProperty.call(h4Tags, i)) {
                        const element = h4Tags[i].innerText;
                        elementId = element.replaceAll(' ', '_');
                        h4Tags[i].setAttribute('id', elementId);
                        content += "<li><a class='font-weight-bold' href='#" + elementId + " ' rel='nofollow'><u>" +
                            element +
                            "</u></a></li>";
                    }
                    $('#tableofcontents').html(content);
                }
            }
        });
    }, [])

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


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    return (
        reviewdata && (
            <>
                <Head>
                    <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
                    <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                    <title>{`${data.review.seo_title} ${year}`}</title>
                    <meta name="description" content={`${data.review.seo_desc}`} />
                    <meta name="keywords" content={`${data.review.seo_keywords}`} />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@" />
                    <meta name="twitter:title" content={`${data.review.seo_title} ${year}`} />
                    <meta name="twitter:description" content={`${data.review.seo_desc}`} />
                    <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}${data.review.slug}`} />

                    <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
                    <meta property="og:title" content={`${data.review.seo_title} ${year}`} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${publicRuntimeConfig.webUrl}${data.review.slug}`} />
                    <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}${data.review.review_logo}`} />
                    <meta property="og:site_name" content={`${data.meta.site_name.value}`} />
                    <meta property="og:description" content={`${data.review.seo_desc}`} />
                    <meta property="article:section" content={`${data.review.name}`} />

                    <link rel="canonical" href={`${publicRuntimeConfig.webUrl}${data.review.slug}`} />
                   {/* <script type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }} /> */}
                </Head>

                <Header />
                <div className="container-fluid">
                    <div className="container review-title mx-auto col-10">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link>{reviewdata.review.slug.includes("coupon")?'':<Link href="/reviews" prefetch={false}> Reviews <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link>}<Link href={`/${reviewdata.review.slug}`}> {reviewdata.review.render_name} {reviewdata.review.slug.includes("coupon")?'Coupons':'Review'}</Link></p>
                    </div>
                </div>
                <div className="container-fluid nopadding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11 review-box">
                                <h1>{reviewdata.review.render_name}<span>{reviewdata.review.slug.includes("coupon")?' Coupons, Promo Codes and Offers':'Review'}</span></h1>
                                <div className="contents reviewContents">
                                    <div id="accordion" className="">
                                        <div className="card">
                                            <div className="" id="headingOne">
                                                <span className="">
                                                    <button data-bs-toggle="collapse" className="btn font-weight-bold" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Contents [show]
                                                    </button>
                                                </span>
                                            </div>

                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ul className="list-group" id="tableofcontents">
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              

                                {/* new coupon */}
                                <div className='listCoupns'>
                                {reviewdata.pcoupons_above.map((item, index) => {
                                    if (item.is_deal == 1)
                                        return (<div className="coupon-item" key={item.id}>
                                            <div className="discountBox">
                                                <div className="offBox">
                                                {item.type_text != "" ? item.type_text : 25}% <br/> OFF
                                                </div>
                                                <div className="isValid">
                                                <span>
                                                    Verified
                                                </span>
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
                                                        <path
                                                        d="M91.301 122.708 71.46 102.867l5.891-5.892 13.95 13.95 30.842-30.842 5.891 5.892-36.733 36.733Zm79.233-6.141-8.608-16.717 8.608-16.558a8.471 8.471 0 0 0 .55-6.542 8.457 8.457 0 0 0-4.283-4.975l-16.792-8.458-2.775-18.467a8.469 8.469 0 0 0-3.408-5.617c-1.858-1.341-4.142-1.891-6.375-1.491l-18.55 3.025-13.1-13.317h-.008c-3.209-3.267-8.875-3.267-12.092 0L80.468 40.808 62.05 37.742c-2.242-.4-4.533.15-6.383 1.491a8.47 8.47 0 0 0-3.408 5.617l-2.85 18.583-16.717 8.342a8.471 8.471 0 0 0-4.275 4.975 8.449 8.449 0 0 0 .541 6.533l8.609 16.709-8.6 16.566a8.416 8.416 0 0 0-.55 6.534 8.448 8.448 0 0 0 4.283 4.983l16.783 8.45 2.776 18.467a8.451 8.451 0 0 0 3.408 5.616 8.475 8.475 0 0 0 6.375 1.5l18.558-3.033 13.1 13.317a8.433 8.433 0 0 0 6.05 2.533c2.292 0 4.433-.9 6.05-2.533l13.233-13.359 18.417 3.075a8.41 8.41 0 0 0 6.375-1.5 8.45 8.45 0 0 0 3.408-5.616l2.859-18.575 16.716-8.342a8.462 8.462 0 0 0 4.275-4.983c.7-2.184.509-4.5-.55-6.525Z"
                                                        fillRule="evenodd"
                                                        />
                                                    </g>
                                                    </svg>
                                                </span>
                                                </div>
                                            </div>
                                            <div className="coupnBox">
                                                <div className="coupondesc">
                                                <div>
                                                    <div className="svgBox">
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                        d="M13.2735 6.60866L7.38683 0.721994C7.14016 0.475327 6.80016 0.335327 6.44683 0.335327H1.66683C0.933496 0.335327 0.333496 0.935327 0.333496 1.66866V6.44866C0.333496 6.80199 0.473496 7.14199 0.726829 7.38866L6.6135 13.2753C7.1335 13.7953 7.98016 13.7953 8.50016 13.2753L13.2802 8.49533C13.8002 7.97533 13.8002 7.13533 13.2735 6.60866ZM3.3335 4.33533C2.78016 4.33533 2.3335 3.88866 2.3335 3.33533C2.3335 2.78199 2.78016 2.33533 3.3335 2.33533C3.88683 2.33533 4.3335 2.78199 4.3335 3.33533C4.3335 3.88866 3.88683 4.33533 3.3335 4.33533Z"
                                                        fill="#1A1A1A"
                                                        ></path>
                                                    </svg>
                                                    <span>deal</span>
                                                    </div>
                                                    <p>
                                                    <a href="#" onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }}>
                                                        {item.title}
                                                    </a>
                                                    </p>
                                                    <div className="couponBtndesc">
                                                    <button data-bs-toggle="modal" onClick={(e) => { setDealModaldata(item), window.open(item.aff_url && item.aff_url) }} data-bs-target="#dealPopup">Get Deal
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                        </svg>
                                                    </button>
                                                    </div>
                                                </div>
                                                <div className="termsBox">
                                                    <a href="#">Terms & Conditions</a>
                                                </div>
                                                </div>
                                                <div className="couponBtn">
                                                <button data-bs-toggle="modal" data-bs-target="#getDeal">
                                                    Get deal
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                </button>
                                                <div className="termsBox">
                                                    <p>Expires:03/062025</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>);
                                    else
                                        return(<div className="coupon-item" key={item.id}>
                                            <div className="discountBox">
                                                <div className="offBox">
                                                50% <br/> OFF
                                                </div>
                                                <div className="isValid">
                                                <span>
                                                    Verified
                                                </span>
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
                                                        <path
                                                        d="M91.301 122.708 71.46 102.867l5.891-5.892 13.95 13.95 30.842-30.842 5.891 5.892-36.733 36.733Zm79.233-6.141-8.608-16.717 8.608-16.558a8.471 8.471 0 0 0 .55-6.542 8.457 8.457 0 0 0-4.283-4.975l-16.792-8.458-2.775-18.467a8.469 8.469 0 0 0-3.408-5.617c-1.858-1.341-4.142-1.891-6.375-1.491l-18.55 3.025-13.1-13.317h-.008c-3.209-3.267-8.875-3.267-12.092 0L80.468 40.808 62.05 37.742c-2.242-.4-4.533.15-6.383 1.491a8.47 8.47 0 0 0-3.408 5.617l-2.85 18.583-16.717 8.342a8.471 8.471 0 0 0-4.275 4.975 8.449 8.449 0 0 0 .541 6.533l8.609 16.709-8.6 16.566a8.416 8.416 0 0 0-.55 6.534 8.448 8.448 0 0 0 4.283 4.983l16.783 8.45 2.776 18.467a8.451 8.451 0 0 0 3.408 5.616 8.475 8.475 0 0 0 6.375 1.5l18.558-3.033 13.1 13.317a8.433 8.433 0 0 0 6.05 2.533c2.292 0 4.433-.9 6.05-2.533l13.233-13.359 18.417 3.075a8.41 8.41 0 0 0 6.375-1.5 8.45 8.45 0 0 0 3.408-5.616l2.859-18.575 16.716-8.342a8.462 8.462 0 0 0 4.275-4.983c.7-2.184.509-4.5-.55-6.525Z"
                                                        fillRule="evenodd"
                                                        />
                                                    </g>
                                                    </svg>
                                                </span>
                                                </div>
                                            </div>
                                            <div className="coupnBox">
                                                <div className="coupondesc">
                                                <div>
                                                    <div className="svgBox">
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                        d="M13.2735 6.60866L7.38683 0.721994C7.14016 0.475327 6.80016 0.335327 6.44683 0.335327H1.66683C0.933496 0.335327 0.333496 0.935327 0.333496 1.66866V6.44866C0.333496 6.80199 0.473496 7.14199 0.726829 7.38866L6.6135 13.2753C7.1335 13.7953 7.98016 13.7953 8.50016 13.2753L13.2802 8.49533C13.8002 7.97533 13.8002 7.13533 13.2735 6.60866ZM3.3335 4.33533C2.78016 4.33533 2.3335 3.88866 2.3335 3.33533C2.3335 2.78199 2.78016 2.33533 3.3335 2.33533C3.88683 2.33533 4.3335 2.78199 4.3335 3.33533C4.3335 3.88866 3.88683 4.33533 3.3335 4.33533Z"
                                                        fill="#1A1A1A"
                                                        ></path>
                                                    </svg>
                                                    <span>code</span>
                                                    </div>
                                                    <p>
                                                    <a href="#" onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }}>{item.title}</a>
                                                    </p>
                                                    <div className="couponBtndesc">
                                                    <button data-bs-toggle="modal" data-bs-target="#getDeal">
                                                        Get Deal
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                        </svg>
                                                    </button>
                                                    </div>
                                                </div>
                                                <div className="termsBox">
                                                    <a href="#">Terms & Conditions</a>
                                                </div>
                                                </div>
                                                <div className="couponBtn">
                                                <button onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }} data-bs-toggle="modal" data-bs-target="#codePopup">Get Code
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                </button>
                                                <div className="termsBox">
                                                    <p>Expires:03/062025</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>); 
                                            
                                        }
                                    )}            

                                </div>




                            </div> 
                        </div>
                    </div>
                </div>
               
                <div className="container-fluid">
                    <div className="container">
                        <div className="row review">
                            <div className="col-lg-11 col-md-12 col-sm-11 write-review">
                                <div
                                    dangerouslySetInnerHTML={{ __html: reviewdata.review.desc }}
                                />
                                <div id="fAq">
                                    {reviewdata.faqs.map((item) => {
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
                <div className="container-fluid">
                    <div className="container text-center">
                        <p className="fw-bolder"> You may also like - <Link href={`/${reviewdata.previews[4].slug}`} className="btn btn-primary">{reviewdata.previews[4].render_name}</Link></p>
                    </div>
                </div>

                <div className="container-fluid" id="relatedReviews">
                    <div className="container col-lg-10 col-md-10 col-sm-10  shadow-sm related-review">
                        <h3>Related Reviews</h3>
                        <div className="row">
                            {reviewdata.rreviews.map((item) =>
                                <div className="col-lg-4 col-md-6 col-sm-12  review-item" key={item.id}>
                                    <div className="border">
                                        <Link className="text-center" href={`/${item.slug}`}><i className="fa fa-check-circle-o" aria-hidden="true"></i>{item.render_name}</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="container-fluid  popular-store" id="popularStores">
                        <h1 className="text-center">Popular Stores</h1>
                        <div className="container col-sm-10 col-md-10 col-lg-10">
                            <div className="row row-cols-2">

                                {reviewdata.previews.map((item, index) => {
                                    if (index < 3)
                                        return (<div className="col-lg-4 col-md-6 col-sm-12  coupons" key={item.id}>
                                            <div>
                                                <Link href={`/${item.slug}`}> <Image width={0} height={0} sizes="100vw"
                                                    className="d-flex" src={`${publicRuntimeConfig.imageUrl}${item.review_logo.includes("review-logo") ? "images/" + item.review_logo : item.review_logo}`} alt="" /></Link>
                                            </div>
                                            <div className="text-center">
                                                <Link href={`/${item.slug}`}><span>{item.render_name}</span></Link>
                                            </div>
                                        </div>
                                        )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                    <Footer />
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
                                    <button type="button" onClick={(e) => window.open(dealModaldata.aff_url && dealModaldata.aff_url)} className="btn btn-warning text-white">Visit Store</button>
                                </div>
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
                                <button type="button" onClick={(e) => window.location.href = couponModaldata.aff_url && couponModaldata.aff_url} className="btn btn-warning text-white">Visit Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    )
}