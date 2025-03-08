'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export function Footer() {
  const pathname = usePathname();

  return (

    <footer>
      <div className="container-fluid footer-box">
        <div className="container col-lg-11 col-md-11 col-sm-11">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 about-scoop footer-itmes mx-auto">
              <h4>Scoop<span>Review</span></h4>
              <p>At ScoopReview, we want to be your one-stop-shop for wide, in-depth product reviews of the top brands on the market while pointing you to the best prices on the internet.</p>
              <div className="social">
                <a href="#"><span><i className="fa fa-facebook-square" aria-hidden="true"></i></span></a>
                <a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a>
                <a href="#"><span><i className="fa fa-instagram" aria-hidden="true"></i></span></a>
                <a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-links mx-auto">
              <h3>NAVIGATIONS</h3>
              <Link prefetch={false}
                className={pathname === '/' ? 'text-blue' : 'text-black'}
                href='/'
                shallow={true}
              >
                Home
              </Link><br></br>
              <a href="/about">About</a><br></br>
              <Link prefetch={false}
                className={pathname === '/blogs' ? 'text-blue' : 'text-black'}
                href='/blogs'
                shallow={true}
              >
                Blogs
              </Link>
              <br></br>
              <a href="/faqs">Faqs</a><br></br>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-links mx-auto">
              <h3>QUICK LINKS</h3>
              <Link prefetch={false}
                className={pathname === '/reviews' ? 'text-blue' : 'text-black '}
                href='/reviews'
              >
                Reviews
              </Link><br></br>
             
              <Link prefetch={false}
                className={pathname === '/categories' ? 'text-blue' : 'text-black'}
                href='/categories'
              >
                Categories
              </Link><br></br>
              <Link prefetch={false}
                className={pathname === '/contact' ? 'text-blue' : 'text-black'}
                href='/contact'
              >
                Contact
              </Link><br></br>
              <Link prefetch={false}
                className={pathname === '/affiliate-disclosure' ? 'text-blue' : 'text-black'}
                href='//affiliate-disclosure'
              >
                Affiliate Disclosure
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-links mx-auto">
              <h3>NEED HELP?</h3>
              <Link prefetch={false}
                className={pathname === '/privacy-policy' ? 'text-blue' : 'text-black'}
                href='/privacy-policy'
              >
                Privacy Policy
              </Link><br></br>
              <Link prefetch={false}
                className={pathname === '/cookie-policy' ? 'text-blue' : 'text-black'}
                href='/cookie-policy'
              >
                Cookie Policy
              </Link><br></br>
              <Link prefetch={false}
                className={pathname === '/terms-of-use' ? 'text-blue' : 'text-black'}
                href='/terms-of-use'
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="#top"><button id="scrollToTop"><i className="fa fa-angle-double-up" aria-hidden="true"></i></button></a>
      </div>
      <div className="container-fluid copyright">
        <div className="row text-center">
          <a href="#top"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
          <p className="copyright-para">ScoopReview earns affiliate commisions on qualifying purchases as an amazon associate. "Amazon, and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
          <p>Copyright &copy; 2023 ScoopReview. All Right Reserved</p>
        </div>
      </div></footer>
  )

}
export default Footer;