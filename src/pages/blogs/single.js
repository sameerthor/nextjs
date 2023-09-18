import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from "react";
import '@/styles/blog.css';
import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config'
import $ from 'jquery';
const { publicRuntimeConfig } = getConfig()




export default function Blog({ data }) {

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
    return (
        data && (
            <>
                <Head>
                    <link rel="icon" type="image/png" href={`${publicRuntimeConfig.imageUrl}images/${data.meta.site_ico.value}`} />
                    <meta name="google-site-verification" content="DvPMmnSda8K2FMzEzjVvgshLLqwbNntXGg3BZKcUPWY" />
                    <title>{ data.blog.meta_title !== '' ? data.blog.meta_title : data.meta.site_name.value} - ScoopReview</title>
                    <meta name="description" content={data.blog.meta_descp!==''?`${data.blog.meta_descp}`:''} />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@" />
                    <meta name="twitter:title" content={data.blog.meta_title!==''?`${data.blog.meta_title}`:''} />
                    <meta name="twitter:description" content={data.blog.meta_descp!==''?`${data.blog.meta_descp}`:''} />
                    <meta name="twitter:image" content={`${publicRuntimeConfig.imageUrl}${data.blog.image}`} />
                    <meta name="twitter:url" content={`${publicRuntimeConfig.webUrl}${data.blog.slug}`} />

                    <meta property="fb:app_id" content={`${data.meta.fbapp_id.value}`} />
                    <meta property="og:title" content={data.blog.meta_title!==''?`${data.blog.meta_title}`:''} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${publicRuntimeConfig.webUrl}${data.blog.slug}`} />
                    <meta property="og:image" content={`${publicRuntimeConfig.imageUrl}${data.blog.image}`} />
                    <meta property="og:site_name" content={`${data.meta.site_name.value}`} />
                    <meta property="og:description" content={data.blog.meta_descp!==''?`${data.blog.meta_descp}`:''} />

                    <link rel="canonical" href={`${publicRuntimeConfig.webUrl}${data.blog.slug}`} />  </Head>
                <Header />
                <div id="blogHeader">
                    <div className="container">
                        <div className="d-flex blog-title justify-content-center align-items-center">
                            <h1 className="text-center">{data.blog.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container blog-navigation">
                        <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href="/blogs">Blogs <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href={`/${data.blog.slug}`}>{data.blog.title}</Link></p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 blog-section mx-auto">
                                <div className="blog-image">
                                    <img src={`${publicRuntimeConfig.imageUrl}images/${data.blog.image}`} alt="" />
                                </div>
                                <div className="author">
                                    <p>Posted by <span>{data.blog.author.name}</span></p>
                                </div>
                                <div className="contents">
                                    <div id="accordion" className="my-3">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <span className="bg-light p-3">
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
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 blog-content mx-auto">
                                <div className="write-blog">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: data.blog.content }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 author-box mx-auto d-flex">
                                <div className="image">
                                    <img src="./images/author.webp" alt="" />
                                </div>
                                <div>
                                    <span>{data.blog.author.name}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </>)
    )
}