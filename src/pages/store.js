import Header from './components/header';
import Footer from './components/footer';
import { useState, useEffect } from "react";
import '@/styles/store.css';
import Link from 'next/link';
import moment from "moment";
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function Store({ data }) {
    ;
    const [storedata, setStoredata] = useState(data);
    const [activetab, setActivetab] = useState("all");
    const [dealModaldata, setDealModaldata] = useState({});
    const [couponModaldata, setCouponModaldata] = useState({});

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



    return (
        <>
            {data && (<><Header />
                <div className="container-fluid deal-bg">
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/coupons">Deals <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href={storedata.store.slug}>{storedata.store.name}</Link></p>
                    </div>
                    <div className="container col-lg-8 col-md-8 col-sm-11 mx-auto deal-box">
                        <h1>{data.store.seo_title} {moment().format('YYYY')}</h1>
                        <p className="verified"><span className="check"><i className="fa fa-check-circle-o" aria-hidden="true"></i></span>Last
                            verified on <span>{moment().format('Do MMMM YYYY')}</span></p>
                        <div className="btns">
                            <button onClick={() => changeTab('all')} className={activetab == 'all' ? 'selected all' : 'all'}>All <span>{data.coupon_h2.length}</span></button>
                            <button onClick={() => changeTab('coupons')} className={activetab == 'coupons' ? 'selected coupons' : 'coupons'}>Coupons <span>{data.coupon_h2.filter(element => element.is_deal === 0).length}</span></button>
                            <button onClick={() => changeTab('deals')} className={activetab == 'deals' ? 'selected deals' : 'deals'}>Deals <span>{data.coupon_h2.filter(element => element.is_deal !== 0).length}</span></button>
                        </div>
                        {storedata.coupon_h2 && storedata.coupon_h2.map((item) =>
                            <div className="container col-lg-12 col-md-12 col-sm-12 mx-auto deals" key={item.id}>
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col col-lg-9 col-md-9 col-sm-12 mx-auto duo">
                                        <div className="d-flex">
                                            <div className="image">
                                                <img src={`${publicRuntimeConfig.imageUrl}images/${storedata.store.store_logo}`} alt="" />
                                                <p className="discount">{item.type_text}% <strong>off</strong></p>
                                                <p className="success">100% success</p>
                                            </div>
                                            <div className="content">
                                                <a id="store" href=""><h3>{item.title}</h3></a>
                                                <div className="d-flex">
                                                    <span id="code">{ item.is_deal=='0'?'Code':'Deal'}</span>
                                                    
                                                  { item.is_deal=='0' && <span id="noexp">No Expires</span> }
                                                </div>
                                                <p>{item.descp}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-3 col-md-3 col-sm-12 mx-auto">
                                        {
                                            item.is_deal=='0'?
                                            <button className="submit d-flex" data-bs-toggle="modal" onClick={(e)=>setCouponModaldata(item)} data-bs-target="#codePopup" type="button">GET CODE<i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                            :
                                            <button className="submit d-flex" data-bs-toggle="modal" onClick={(e)=>{setDealModaldata(item),window.open(storedata.store.aff_url)}} data-bs-target="#dealPopup" type="button">GET DEAL <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>

                                        }
                                        <div className="" id="icons">
                                            <span className="face">
                                                <span className="smile" data-bs-toggle="tooltip" data-bs-placement="top" title="This Worked!"><i className="fa fa-smile-o" aria-hidden="true"></i></span>
                                                <span className="sad" data-bs-toggle="tooltip" data-bs-placement="top" title="It didn't Work"><i className="fa fa-frown-o" aria-hidden="true"></i></span>
                                                <span className="star" data-bs-toggle="tooltip" data-bs-placement="top" title="Save this coupon"><i className="fa fa-star-o" aria-hidden="true"></i></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p id="msg"><span id="lock"><i className="fa fa-lock" aria-hidden="true"></i></span><span id="excl">Exclusive:</span> This coupon can only be found at our website.</p>
                                    <div className="impression d-flex">
                                        <div>
                                            <span><i className="fa fa-wifi" aria-hidden="true"></i>445 Used - 0 Today</span>
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
                            <h3>Best Clytia Love Coupon Codes</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Discount</th>
                                        <th>Discription</th>
                                        <th>Status</th>
                                        <th>Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.coupon_h2 && data.coupon_h2.map((item, index) => {
                                        if (index <= 2)
                                            return (
                                                <tr key={item.id}>
                                                    <td> {item.type_text}% OFF</td>
                                                    <td>{item.title}</td>
                                                    <td><strong>Active</strong></td>
                                                    <td>{moment().format('YYYY-MM-DD')}</td>
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
                            <div
                                dangerouslySetInnerHTML={{ __html: storedata.store.desc.match(/^[^<]*/)[0] }}
                            />
                        </div>
                        {
                            storedata.faqs.length > 0 &&
                            <>
                                <h2>Ozone Signature Coupons FAQs</h2>

                                <div className="fnq">
                                    {
                                        storedata.faqs && storedata.faqs.map((item) =>
                                            <div key={item.id}>
                                                <h3>{item.faq_question}</h3>

                                                <div
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
                        <h3>Related Store</h3>
                        <div className="row">
                            {
                                storedata.rstores && storedata.rstores.map((item) =>
                                    <div className="col-lg-3 col-md-5 col-sm-10 mx-auto store-item" key={item.id}>
                                        <Link className="text-center" href={`/${item.slug}`}><i className="fa fa-check-circle-o" aria-hidden="true"></i> {item.name}</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container col-sm-11 col-md-8 col-lg-8 shadow-sm popular">
                        <h3>Popular Stores</h3>
                        <div className="row row-cols-2 row-cols-lg-4">
                            {
                                storedata.pstores && storedata.pstores.map((item) =>
                                    <div className="col popular-store mx-auto" key={item.id}>
                                        <Link href={`/${item.slug}`}>
                                            <img src={`${publicRuntimeConfig.imageUrl}images/${item.store_logo}`} alt={item.name} />
                                        </Link>
                                        <p className="text-center">{item.name}</p>
                                    </div>
                                )
                            }
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
                                <button type="button" className="btn btn-secondary" onClick={(e) => { navigator.clipboard.writeText(couponModaldata.coupon_code && couponModaldata.coupon_code); alert('Coupon Code Copied to Clipboard Successfully!') }}
                                >COPY</button>
                                <button type="button" onClick={(e) => window.location.href = storedata.store.aff_url && storedata.store.aff_url} className="btn btn-warning text-white">Visit Store</button>
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