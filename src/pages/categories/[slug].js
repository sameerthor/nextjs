import Header from '../../components/header';
import Footer from '../../components/footer';
import '@/styles/subcategories.css'
import Link from 'next/link';
import getConfig from 'next/config'
import Categories from '.';
const { publicRuntimeConfig } = getConfig()

const exampleFunction = ({page}) => {
    return (

        page && (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="container col-lg-9 col-md-9 col-sm-9 navigation">
                        <div className="row">
                            <p><Link href="/">ScoopReview <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span></Link> <Link href={`/categories/${page.category.slug}`}>{page.category.name}</Link></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid categories">
                    <div className="container col-lg-9 col-md-9 col-sm-9">
                        <div className="row">
                            {page.reviews.map((item) =>

                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <div className="shadow categories-box">
                                        <Link href={`/${item.slug}`}>{item.render_name}</Link>
                                    </div>
                                </div>
                            )} 
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
            page: data || null
        }
    };
}

export default exampleFunction;