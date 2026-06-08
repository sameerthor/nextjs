import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/subcategories.css'
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const getImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== "string") {
        return null;
    }

    const normalizedImagePath = imagePath.includes("/review-logo/") && !imagePath.includes("/images/review-logo/")
        ? imagePath.replace("/review-logo/", "/images/review-logo/")
        : imagePath;

    if (normalizedImagePath.startsWith("http")) {
        return normalizedImagePath;
    }

    if (normalizedImagePath.startsWith("/")) {
        return `${publicRuntimeConfig.imageUrl.replace(/\/$/, "")}${normalizedImagePath}`;
    }

    if (normalizedImagePath.startsWith("images/") || normalizedImagePath.startsWith("wp-content/")) {
        return `${publicRuntimeConfig.imageUrl}${normalizedImagePath}`;
    }

    return `${publicRuntimeConfig.imageUrl}images/${normalizedImagePath}`;
}

const getReviewImageUrl = (item) => {
    return getImageUrl(item?.featured_image || item?.image || item?.thumb || item?.review_logo);
}

const getReviewImageFields = (item) => {
    return {
        featured_image: item?.featured_image || null,
        image: item?.image || null,
        thumb: item?.thumb || null,
        review_logo: item?.review_logo || null
    };
}

const hasReviewImage = (item) => {
    return Boolean(item?.featured_image || item?.image || item?.thumb || item?.review_logo);
}

const getReviewImageFromPage = async (slug) => {
    try {
        const response = await fetch(`${publicRuntimeConfig.webUrl}${slug}`);
        const html = await response.text();
        const imageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

        return imageMatch?.[1] || null;
    } catch {
        return null;
    }
}

const addReviewImages = async (data) => {
    try {
        const categoriesResponse = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/categories`);
        const categoriesData = await categoriesResponse.json();
        const categorySlugs = categoriesData?.categories?.map((category) => category.slug) || [];

        const categoryResponses = await Promise.all(
            categorySlugs.map(async (categorySlug) => {
                try {
                    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/categories/${categorySlug}`);
                    const categoryData = await response.json();
                    return categoryData?.reviews || [];
                } catch {
                    return [];
                }
            })
        );

        const imageBySlug = new Map();
        categoryResponses.flat().forEach((review) => {
            if (review?.slug && hasReviewImage(review) && !imageBySlug.has(review.slug)) {
                imageBySlug.set(review.slug, getReviewImageFields(review));
            }
        });

        const reviews = await Promise.all(
            data.reviews.map(async (review) => {
                const categoryImageFields = imageBySlug.get(review.slug);

                if (categoryImageFields) {
                    return {
                        ...review,
                        ...categoryImageFields
                    };
                }

                const reviewPageImage = await getReviewImageFromPage(review.slug);

                return {
                    ...review,
                    ...(reviewPageImage ? { review_logo: reviewPageImage } : {})
                };
            })
        );

        return {
            ...data,
            reviews
        };
    } catch {
        return data;
    }
}


export default function Reviews({ data }) {



    return (
        <><Head>
            <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
            <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
            <title>{data.meta.seo_title}</title>
            <meta name="description" content={data.meta.seo_descp == null ? "" : `${data.meta.seo_descp}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:title" content={`${data.meta.seo_title}`} />
            <meta name="twitter:description" content={data.meta.seo_descp == null ? "" : `${data.meta.seo_descp}`} />
            <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}reviews`} />
            <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
            <meta property="og:title" content={`${data.meta.seo_title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${publicRuntimeConfig.webUrl}reviews`} />
            <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_logo.value}`} />
            <meta property="og:site_name" content={`${data.meta.site_title.value}`} />
            <meta property="og:description" content={data.meta.seo_descp == null ? "" : `${data.meta.seo_descp}`} />

            <link rel="canonical" href={`${publicRuntimeConfig.webUrl}reviews`} />
        </Head>

            <Header />
            <div className="container-fluid">
                <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                    <div className="row">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/reviews">Reviews</Link></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid sub-categories">
                <div className="container col-lg-9 col-md-9 col-sm-9">
                    <div className="row">
                        {data.reviews.map((item, index) => {
                            const reviewImageUrl = getReviewImageUrl(item);

                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <div className="shadow sub-categories-box">
                                        {reviewImageUrl && (
                                            <Link href={`/${item.slug}`} className="category-featured-image">
                                                <img src={reviewImageUrl} alt={item.render_name} />
                                            </Link>
                                        )}
                                        <Link
                                            href={`/${item.slug}`}
                                        >{item.render_name}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/reviews`);
    const data = await response.json();
    const dataWithReviewImages = await addReviewImages(data);

    return {
        props: {
            data: dataWithReviewImages
        },
        revalidate: 10
    };
}
