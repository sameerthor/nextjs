import Header from '../../components/header';
import Footer from '../../components/footer';
import '@/styles/categories.css'
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const getHeading = (title) => {
    if (!title) return "";

    // Check for percentage discount (e.g., "40% OFF")
    const percentMatch = title.match(/(\d+)%/);
    if (percentMatch) {
        return `${percentMatch[1]}% OFF`;
    }

    // Check for dollar discount (e.g., "$40 OFF")
    const dollarMatch = title.match(/\$(\d+)/);
    if (dollarMatch) {
        return `$${dollarMatch[1]} OFF`;
    }

    // Check for "Free Shipping"
    if (/free shipping/i.test(title)) {
        return "Free Shipping";
    }

    return "";
};
const exampleFunction = ({ page }) => {
    return (

        page && (
            <>
                <Header />
                <section className='categorySection'>
                    <div className='container'>
                        <div className="top-bar-store-bg">
                            <div className="store-bg-1">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 p-0">
                                        <div className="text-center">
                                            <div className="cat-image-box">
                                                <img
                                                    alt="Automotive coupons"
                                                    loading="lazy"
                                                    width="200"
                                                    height="81"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="cat-image"
                                                    src="../assets/coupons.png"

                                                />
                                            </div>
                                            <div className="stars text-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="star"
                                                        className="svg-inline--fa fa-star"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                        />
                                                    </svg>
                                                ))}
                                                <span> 4.8 (12) Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <h1>Today's {page?.category?.name} Coupons & Offers</h1>
                                        <div className="divider-line mt-2 mb-2"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>🛍️ Total Offers</th>
                                                    <td>{page?.category?.stores.reduce((count, current) => count + current.coupons.length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🏷️ Coupon Codes</th>
                                                    <td>{page?.category?.stores.reduce((count, current) => count + current.coupons.filter(x => x.is_deal != '1').length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🛒 Free Shipping</th>
                                                    <td>{page?.category?.stores.reduce((count, current) => count + current.coupons.filter(x => x.title.toLowerCase().includes("shipping")).length, 0)}</td>
                                                </tr>
                                                
                                            </tbody>
                                          
                                        </table>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <h1>Similar Categories</h1>
                                        <div className="divider-line mt-2 mb-2"></div>
                                        <div className="similarCat">
                                            <ul>
                                            {page?.categories.map((c) =>
                                                <li>
  <Link href={`/coupon-category/${c.slug}`}>{c.name}</Link>
</li>
                                            )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='subCatBox'>
                            <div className='row'>
                                {page?.category?.stores?.map((store) =>
                                    store.coupons.map((coupon) => (
                                        <div key={coupon.id} className="col-lg-4 col-md-6 col-sm-12 p-1 mb-4">
                                            <div className="storeItem">
                                                <div className="storeInfo">
                                                    <div className="storeData">
                                                        <span className="discountValue">{getHeading(coupon.title)}</span>
                                                        <a className="storeUrl" href={`/${store.slug}`}>
                                                            {store.name}
                                                        </a>
                                                    </div>
                                                    <div className="storeData">
                                                        <div className="storeImage">
                                                            <a title={store.name} href={`/${store.slug}`}>
                                                                <img
                                                                    src={`${publicRuntimeConfig.imageUrl}images/${store.store_logo}`}
                                                                    alt={store.name}
                                                                    title={`${store.name} Coupons`}
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="storeData">
                                                    <a className="storeName" href={`/store/${store.slug}`}>
                                                        <p>{coupon.title}</p>
                                                    </a>
                                                </div>
                                                <div className="dealBtnBox">
                                                    <div className="flexverify">
                                                        <p title="This coupon is verified" className="verifiedCoupon">
                                                            <svg data-bbox="27.999 25 143.499 149.925" viewBox="27.999 25 143.499 149.925" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Verified">
                                                                <g>
                                                                    <path d="M91.301 122.708 71.46 102.867l5.891-5.892 13.95 13.95 30.842-30.842 5.891 5.892-36.733 36.733Zm79.233-6.141-8.608-16.717 8.608-16.558a8.471 8.471 0 0 0 .55-6.542 8.457 8.457 0 0 0-4.283-4.975l-16.792-8.458-2.775-18.467a8.469 8.469 0 0 0-3.408-5.617c-1.858-1.341-4.142-1.891-6.375-1.491l-18.55 3.025-13.1-13.317h-.008c-3.209-3.267-8.875-3.267-12.092 0L80.468 40.808 62.05 37.742c-2.242-.4-4.533.15-6.383 1.491a8.47 8.47 0 0 0-3.408 5.617l-2.85 18.583-16.717 8.342a8.471 8.471 0 0 0-4.275 4.975 8.449 8.449 0 0 0 .541 6.533l8.609 16.709-8.6 16.566a8.416 8.416 0 0 0-.55 6.534 8.448 8.448 0 0 0 4.283 4.983l16.783 8.45 2.776 18.467a8.451 8.451 0 0 0 3.408 5.616 8.475 8.475 0 0 0 6.375 1.5l18.558-3.033 13.1 13.317a8.433 8.433 0 0 0 6.05 2.533c2.292 0 4.433-.9 6.05-2.533l13.233-13.359 18.417 3.075a8.41 8.41 0 0 0 6.375-1.5 8.45 8.45 0 0 0 3.408-5.616l2.859-18.575 16.716-8.342a8.462 8.462 0 0 0 4.275-4.983c.7-2.184.509-4.5-.55-6.525Z" fill-rule="evenodd"></path>
                                                                </g>
                                                            </svg>
                                                            <span>Verified {coupon.is_deal === "1" ? "Deal" : "Code"}</span>
                                                        </p>
                                                    </div>
                                                    <p className="grabDeal">
                                                        <a href={`/store/${store.slug}`}>
                                                            {coupon.is_deal === "1" ? "Get Deal" : "Show Code"}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                                                                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"></path>
                                                                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"></path>
                                                            </svg>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}

                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>)

    );
};



export async function getServerSideProps(ctx) {


    const slug = ctx.params.slug;
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/coupon-category/${slug}`);
    const data = await response.json();
    return {
        props: {
            page: data || null
        }
    };
}

export default exampleFunction;