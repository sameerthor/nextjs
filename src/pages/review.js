import { useState, useEffect } from 'react';
import '@/styles/review.css';
import '@/styles/new_review.css';
import Header from '../components/header';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Reviews({ data }) {
    console.log(data);
    const router = useRouter()
    const [reviewdata, setReviewdata] = useState(data);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [dealModaldata, setDealModaldata] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [copytext, setCopytext] = useState("COPY")
    const [couponModaldata, setCouponModaldata] = useState({});
    if (data == null) {
        return '';
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        if (res.ok) {
            setMessage("Subscribed successfully! 🎉");
            setEmail(""); // Clear input
        } else {
            setMessage(`Error: ${data.error}`);
        }
    };

    


    const changeView = ((index) => {
        setReviewdata((prevState) => {
            prevState.coupons[index].is_more = (!reviewdata.coupons[index].is_more);
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
    const getReviewImage = (review) => {
    if (
        review &&
        typeof review.review_logo === "string" &&
        review.review_logo.trim() !== ""
    ) {
        if (review.review_logo.startsWith("/wp-content/")) {
            return `${publicRuntimeConfig.imageUrl}${review.review_logo}`;
        }

        return `${publicRuntimeConfig.imageUrl}images/${review.review_logo}`;
    }

    return "/images/no-image.png";
};

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
                <section className='reviewHeader'>
                    <div className="container">
                        
                        <h1>
                            {reviewdata?.review?.name?.replace(
                                /\b(19|20)\d{2}\b/g,
                                new Date().getFullYear()
                            )}
                        </h1>

                        <div className='author'>
                            Written by <strong>Mashma M</strong>
                        </div>
                        <div className="headerTags">
                            {Object.entries(reviewdata.allcat).map(([slug, name]) => (
                                <a key={slug} href={`/categories/${slug}`} className="catg">

                                    <div className='date'>
                                       {name}   |   April 10, 2025
                                    </div>
                                </a>
                            ))}
                            

                        </div>
                    </div>
                </section>
                <section className="blog-details-page">

                    <div className="container">
                        <div className="blogBox">
                            <div>
                                <div className="blogContent">
                                    <div className="review-box">
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
                                            {reviewdata.coupons.map((item, index) => {
                                                if (item.is_deal == 1)
                                                    return (<div className="coupon-item" key={item.id}>
                                                        <div className="review_logo">
                                                                <img
                                                                    className="d-flex"
                                                                    src={getReviewImage(item.review || reviewdata.review)}  
                                                                    alt={item.review?.render_name || item.review?.name}
                                                                />
                                                        </div>
                                                        <div className="coupnBox">
                                                            <div className="coupondesc">
                                                                <div>
                                                                    {/* <div className="svgBox">
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
                                                                    </div> */}
                                                                    <p>
                                                                        <a href="#" onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }}>
                                                                            {item.title}
                                                                            
                                                                        </a>
                                                                    </p>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            <div className="couponBtn">
                                                                <div className="offBox">
                                                                    {item.type_text != "" ? item.type_text : 25}%  OFF
                                                                </div>
                                                                <button onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }} data-bs-toggle="modal" data-bs-target="#dealPopup">
                                                                    Get Deal
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                                    </svg>
                                                                </button>
                                                        
                                                            </div>
                                                        </div>
                                                    </div>);
                                                else
                                                    return (<div className="coupon-item" key={item.id}>
                                                        <div className="review_logo">
                                                                <img
                                                                    className="d-flex"
                                                                    src={getReviewImage(item.review || reviewdata.review)}  
                                                                    alt={item.review?.render_name || item.review?.name}
                                                                />
                                                        </div>
                                                        <div className="coupnBox">
                                                            <div className="coupondesc">
                                                                <div>
                                                                    {/* <div className="svgBox">
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
                                                                    </div> */}
                                                                    <p>
                                                                        <a href="#" onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }}>{item.title}</a>
                                                                    </p>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="couponBtn">
                                                                <div className="offBox">
                                                                    {item.type_text != "" ? item.type_text : 25}%  OFF
                                                                </div>
                                                                <button onClick={(e) => { setCouponModaldata(item), window.open(item.aff_url && item.aff_url) }} data-bs-toggle="modal" data-bs-target="#codePopup">Get Code
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                                    </svg>
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>);
                                            }
                                            )}

                                        </div>
                                        {/* veryNew */}
                                        <div className='dw_coupon'>

                                        </div>
                                    </div>

                                    <div className="blogcontentData">
                                        <div className="write-review">
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


                                    {/* <div className="youMayAlso">
                                        <div className="container text-center">
                                            <p className="fw-bolder"> You may also like - <Link href={`/${reviewdata.previews[4].slug}`} className="btn btn-primary">{reviewdata.previews[4].render_name}</Link></p>
                                        </div>
                                    </div> */}
                                    <section className="interestedBox">
                                        <div>
                                            <h2 className="section-title mb-5 fw-bold">
                                                You may also be interested in
                                            </h2>
                                            <div className="row">                                            {reviewdata.previews.map((item, index) => {
                                                if (index < 3)
                                                    return (<div className="col-md-4 mb-3" key={item.id}>
                                                        <div>
                                                            <Link href={`/${item.slug}`}>
                                                                <Image width={0} height={0} sizes="100vw" className="d-flex" src={`${publicRuntimeConfig.imageUrl}${item.review_logo.includes("review-logo") ? "images/" + item.review_logo : item.review_logo}`} alt="" />
                                                            </Link>
                                                            <div className="d-flex align-items-center mb-2 mt-3">
                                                                <span className="tag me-2">Reviews</span>

                                                            </div>
                                                            <h4 className="post-title fw-bold"><Link href={`/${item.slug}`}><span>{item.render_name}</span></Link></h4>
                                                        </div>
                                                    
                                                    </div>
                                                    )
                                                }
                                                )}
                                            </div>




                                        </div>
                                    </section>


                                    <div id="relatedReviews">
                                        <div className="related-review">
                                            <h3>Related Reviews</h3>
                                            <div className="row">
                                                {reviewdata.rreviews.map((item) =>
                                                    <div className="col-lg-4 col-md-6 col-sm-6  review-item" key={item.id}>
                                                        <div className="border">
                                                            <Link className="" href={`/${item.slug}`}><i className="fa fa-check-circle-o" aria-hidden="true"></i>{item.render_name}</Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* <div className="popular-store" id="popularStores">
                                            <h1 className="text-left">Popular Stores</h1>
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
                                        </div> */}
                                    </div>
                                    {/* 
                                    <div className="commentbox">
                                        <div className="row comment mx-auto">
                                            <h3>Leave a Reply</h3>
                                            <p>
                                                Your email address will not be published. Required fields are
                                                marked <span>*</span>
                                            </p>
                                        </div>

                                        <div className="row input mx-auto">
                                            <form className="d-block" role="post">
                                                <textarea
                                                    className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                    rows="10"
                                                    placeholder="Input your thought ..."
                                                    required
                                                ></textarea>

                                                <label className="d-block">
                                                    <i className="fa-regular fa-user"></i> Name <span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    required
                                                    className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                />

                                                <label className="d-block">
                                                    <i className="fa-regular fa-envelope"></i> Email <span>*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    required
                                                    className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                />

                                                <label className="d-block">
                                                    <i className="fa-solid fa-globe"></i> Website
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="website url"
                                                    className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                />

                                                <button type="submit">Post Comment</button>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/* Recent Posts */}
                            {/* <div className="col-md-4 p-0">
                                <div className="sidebar">
                                   
                                    <div className="recentPost">
                                        <h4 className="sidebarHeading">Recent Reviews</h4>
                                        {reviewdata.randomReviews.map((review) => (
                                            <a key={review.id} href={`/${review.slug}`} className="recentLink">
                                                <div className="authorImg">
                                                    <img
                                                        src={`${publicRuntimeConfig.imageUrl}${review.review_logo}`} // Use dynamic logo from the database
                                                        width="38"
                                                        height="38"
                                                        alt={review.name}
                                                        title={review.name}
                                                        onError={(e) => (e.target.src = "/default-logo.png")} // Fallback image if not found
                                                    />
                                                </div>

                                                <div>
                                                    <h2 className="recentTitle">{review.render_name}</h2>
                                                    <p className="recentDesc">{review.short_desc}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

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
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://admin.scoopreview.com/${params.slug}/`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const data = await res.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: { data },
    };
  } catch (error) {
    return { notFound: true };
  }
}
