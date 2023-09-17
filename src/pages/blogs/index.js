import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '@/styles/blogs.css'
import Link from 'next/link';
import getConfig from 'next/config'
import moment from "moment";
const { publicRuntimeConfig } = getConfig()

export default function Blogs({ data }) {

    const [blogdata, setBlogdata] = useState([]);
    const [page_no, setPage_no] = useState("1");

    useEffect(() => {
        setBlogdata(data);
    }, [])


    const fetchBlogs = async (i) => {
        setPage_no(i)
        const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/blogs?page=${i}`);
        const data = await response.json();
        ;
        setBlogdata(data);
    };


    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
                <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                <title>{data.metas.seo_title}</title>
                <meta name="description" content={data.metas.seo_descp==null?"":`${data.metas.seo_descp}`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:title" content={`${data.metas.seo_title}`} />
                <meta name="twitter:description" content={data.metas.seo_descp==null?"":`${data.metas.seo_descp}`} />
                <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}blogs`} />
                <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
                <meta property="og:title" content={`${data.metas.seo_title}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${publicRuntimeConfig.webUrl}blogs`} />
                <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_logo.value}`} />
                <meta property="og:site_name" content={`${data.meta.site_title.value}`} />
                <meta property="og:description" content={data.metas.seo_descp==null?"":`${data.metas.seo_descp}`} />

                <link rel="canonical" href={`${publicRuntimeConfig.webUrl}blogs`} />
            </Head>
            <Header />
            <div id="blogHeader">
                <div className="container">
                    <div className="d-flex blog-title justify-content-center align-items-center">
                        <h2>Sponsored Blogs</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid navigation-box">
                <div className="container col-lg-10 col-md-10 col-sm-10 navigation">
                    <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/blogs">Blogs</Link></p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10 all-blogs">
                    <div className="row">
                        {blogdata.blogs && (blogdata.blogs.data.map((item) =>

                            <div className="col-lg-3 col-md-6 col-sm-12 blog-box" key={item.id}>
                                <div className="blog-items">
                                    <Link href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></Link>
                                    <Link href={`/${item.slug}`}> <h3>{item.title.substring(0, 35)}....</h3></Link>
                                    <p>{item.content.replace(/(<([^>]+)>)/ig, '').substring(0, 200)}....</p>
                                    <Link href={`/${item.slug}`}>Read More <span><i className="fa fa-angle-right" aria-hidden="true"></i></span></Link>
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
            {blogdata.blogs && (
                <div className="container-fluid">
                    <div className="container">
                        <div className="text-center blog-count d-flex">
                            {blogdata.blogs.current_page != 1 ?
                                <span onClick={() => fetchBlogs(blogdata.blogs.current_page - 1)} className="angle-left" ><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                : ''
                            }
                            {(() => {
                                const arr = [];
                                for (let i = 1; i <= blogdata.blogs.last_page; i++) {
                                    arr.push(
                                        <span onClick={() => fetchBlogs(i)} className={i == blogdata.blogs.current_page ? 'bg-dark' : 'not-selected'}>{i}</span>

                                    );
                                }
                                return arr;
                            })()}
                            {blogdata.blogs.current_page != blogdata.blogs.last_page ?

                                <span onClick={() => fetchBlogs(blogdata.blogs.current_page + 1)} className="angle-right"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            )}
            <div className="container-fluid fav-box">
                <div className="container col-lg-12 col-md-12 col-sm-12">
                    <h2 className="text-center">Favorite Categories</h2>
                    <div className="row row-cols-2">
                        {blogdata.blog_categories && (blogdata.blog_categories.map((item) =>

                            <div className="col-lg-1 col-md-6 col-sm-6 fav-item mx-auto" key={item.id}>
                                <div>
                                    <Link href={`/blog/category/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></Link>
                                    <span><Link href={`blog/category/${item.slug}`}>{item.name}</Link></span>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container col-lg-10 col-md-10 col-sm-10">
                    <div className="row recent-post">
                        <h2>Recent Post</h2>
                        {blogdata.latest_post && (blogdata.latest_post.map((item) =>
                            <div className="col-lg-4 col-md-6 col-sm-12 recent-box">
                                <div className="recent-items shadow-sm">
                                    <a href={`/${item.slug}`}><img src={`${publicRuntimeConfig.imageUrl}images/${item.image}`} alt="" /></a>
                                    <a href={`/${item.slug}`}><h3>{item.title}</h3></a>
                                    <div className="d-flex">
                                        <span className="post-date me-auto">{moment(item.updated_at, 'YYYY-MM-DD HH:mm:ss').format('DD-MMM-YYYY')}</span>
                                        <span className="time ms-auto">{Math.floor((Math.random() * 10) + 1)} Min read</span>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {


    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/blogs`);
    const data = await response.json();

    return {
        props: { data }, revalidate: 10
    }
}