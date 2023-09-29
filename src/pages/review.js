import { useState, useEffect } from 'react';
import '@/styles/review.css';
import Header from './components/header';
import Head from 'next/head';
import Footer from './components/footer';
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()



export default function Reviews({ data }) {

    const [reviewdata, setReviewdata] = useState(data);
    const [dealModaldata, setDealModaldata] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [copytext, setCopytext] = useState("COPY")
    const [couponModaldata, setCouponModaldata] = useState({});

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
        $('.modal').on('hidden.bs.modal', function (e) {
            setCopytext("COPY");
          })
        },[]);
        
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

                    <link rel="canonical" href={`${publicRuntimeConfig.webUrl}${data.review.slug}`} />    </Head>
                <Header />
                <div className="container-fluid">
                    <div className="container review-title mx-auto col-10">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="">{reviewdata.review.render_name} Review</Link></p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 col-md-12 col-sm-11  review-box">
                                <h1>{reviewdata.review.render_name}<span>Review</span></h1>
                                <div className="contents">
                                    <div id="accordion" className="">
                                        <div className="card">
                                            <div className="" id="headingOne">
                                                <span className=" p-5">
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

                                {reviewdata.pcoupons_above.map((item, index) => {
                                    if (item.is_deal == 1)
                                        return (<div className="coupons" key={item.id}>
                                            <div className="row" >
                                                <div className="col-lg-9 col-md-8 col-sm-12 ">
                                                    <div className="d-flex content-box">
                                                        <div className="coupon-name">
                                                            <a href="#">{reviewdata.review.render_name}<><br/><span className="discount-tag">{item.type_text!=""?item.type_text:25}% off</span></></a>
                                                        </div>
                                                        <div className="coupon-content">
                                                            <a href="#">{item.title}</a>
                                                            <p>{
                                                                item.descp.replace(/<\/?[^>]+(>|$)/g, "").length > 30 ? <>{
                                                                    item.is_more === false ? item.descp.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 30) : item.descp.replace(/<\/?[^>]+(>|$)/g, "")}... <span onClick={() => changeView(index)} className='less_more'>{item.is_more === false ? 'more' : 'less'}</span>
                                                                </> : item.descp.replace(/<\/?[^>]+(>|$)/g, "")
                                                            }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-12  btns">
                                                    <button data-bs-toggle="modal" onClick={(e) => { setDealModaldata(item), window.open(item.aff_url && item.aff_url) }} data-bs-target="#dealPopup">Get Deal</button>
                                                    <span className="badge"><i className="fa fa-check-circle-o" aria-hidden="true"></i>Verified</span>    
                                                </div>
                                                <div>

                                                </div>
                                            </div></div>);
                                    else
                                        return (<div className="coupons" key={item.id}>
                                            <div className="row" >
                                                <div className="col-lg-9 col-md-8 col-sm-9">
                                                    <div className="d-flex content-box">
                                                        <div className="coupon-name">
                                                        <a href="#">{reviewdata.review.render_name}<><br/><span className="discount-tag">{item.type_text!=""?item.type_text:30}% off</span></></a>
                                                        </div>
                                                        <div className="coupon-content">
                                                            <a href="#">{item.title}</a>
                                                            <p>{
                                                                item.descp.replace(/<\/?[^>]+(>|$)/g, "").length > 30 ? <>{
                                                                    item.is_more === false ? item.descp.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 30) : item.descp.replace(/<\/?[^>]+(>|$)/g, "")}... <span onClick={() => changeView(index)} className='less_more'>{item.is_more === false ? 'more' : 'less'}</span>
                                                                </> : item.descp.replace(/<\/?[^>]+(>|$)/g, "")
                                                            }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-5  btns">
                                                    <button onClick={(e) => {setCouponModaldata(item),window.open(item.aff_url && item.aff_url) }} data-bs-toggle="modal" data-bs-target="#codePopup">Get Code</button>
                                                    <span className="badge"><i className="fa fa-check-circle-o" aria-hidden="true"></i>Verified</span>    
                                                </div>
                                            </div></div>);
                                }
                                )}


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
                        <p className="fw-bolder"> You may also like - <Link href={`/${reviewdata.previews[6].slug}`} className="btn btn-primary">{reviewdata.previews[6].render_name}</Link></p>
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
                </div>
                <div className="container-fluid  popular-store" id="popularStores">
                    <h1 className="text-center">Popular Stores</h1>
                    <div className="container col-sm-10 col-md-10 col-lg-10">
                        <div className="row row-cols-2">

                            {reviewdata.previews.map((item,index) =>
                                {
                                if(index<6)
                                return ( <div className="col-lg-2 col-md-4 col-sm-4  coupons" key={item.id}>
                                    <div>
                                        <Link href={`/${item.slug}`}> <img className="d-flex" src={`${publicRuntimeConfig.imageUrl}${item.review_logo.includes("review-logo")?"images/"+item.review_logo:item.review_logo}`} alt="" /></Link>
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
                                <button type="button" className="btn btn-secondary" onClick={(e) => { navigator.clipboard.writeText(couponModaldata.coupon_code && couponModaldata.coupon_code);setCopytext("COPIED!") }}
                                >{copytext}</button>
                                <button type="button" onClick={(e) => window.location.href = couponModaldata.aff_url && couponModaldata.aff_url} className="btn btn-warning text-white">Visit Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    )
}