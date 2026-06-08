import Header from '../../components/header';
import Footer from '../../components/footer';
import '@/styles/subcategories.css'
import Link from 'next/link';
import getConfig from 'next/config'
import Categories from '.';
const { publicRuntimeConfig } = getConfig()

const getImageUrl = (imagePath) => {
    if (!imagePath) {
        return null;
    }

    if (imagePath.startsWith("http")) {
        return imagePath;
    }

    if (imagePath.startsWith("/")) {
        return `${publicRuntimeConfig.imageUrl.replace(/\/$/, "")}${imagePath}`;
    }

    if (imagePath.startsWith("images/") || imagePath.startsWith("wp-content/")) {
        return `${publicRuntimeConfig.imageUrl}${imagePath}`;
    }

    return `${publicRuntimeConfig.imageUrl}images/${imagePath}`;
}

const getReviewImageUrl = (item) => {
    return getImageUrl(item?.featured_image || item?.image || item?.thumb || item?.review_logo);
}

const getStoreImageUrl = (item) => {
    return getImageUrl(item?.featured_image || item?.image || item?.thumb || item?.store_logo);
}

const exampleFunction = ({ page, slug }) => {
    return (

        page && (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                        <div className="row breadcrumbBox">
                            <div className="breadcrumb">
                                <ul>
                                    <li><Link href="/">scoopreview.com</Link> /</li>
                                    <li> <Link href='/categories/review-category'>Review category</Link> /</li>
                                    <li>{slug}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid categories">
                    <div className="container col-lg-9 col-md-9 col-sm-9">
                        <div className="row">
                            {page.reviews.map((item) => {
                                const reviewImageUrl = getReviewImageUrl(item);

                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                        <div className="shadow categories-box">
                                            {reviewImageUrl && (
                                                <Link href={`/${item.slug}`} className="category-featured-image">
                                                    <img src={reviewImageUrl} alt={item.render_name} />
                                                </Link>
                                            )}
                                            <Link href={`/${item.slug}`}>{item.render_name}</Link>
                                        </div>
                                    </div>
                                )
                            })} 
                            {page.stores.map((item) => {
                                const storeImageUrl = getStoreImageUrl(item);

                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                        <div className="shadow categories-box">
                                            {storeImageUrl && (
                                                <Link href={`/${item.slug}`} className="category-featured-image">
                                                    <img src={storeImageUrl} alt={item.render_name || item.name} />
                                                </Link>
                                            )}
                                            <Link href={`/${item.slug}`}>{item.render_name || item.name}</Link>
                                        </div>
                                    </div>
                                )
                            })} 
                        </div>
                    </div>
                </div>
                <Footer />
            </>)

    );
};



export async function getServerSideProps(ctx) {


    const slug = ctx.params.slug;
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/categories/${slug}`);
    const data = await response.json();  
    return {
        props: {
            page: data || null,
            slug
        }
    };
}

export default exampleFunction;
