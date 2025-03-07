'use client';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation'

const Search = dynamic(() => import("./search"), {
  ssr: false,
});


export function Header() {

  const pathname = usePathname();
  

  return (

    <header>
      <nav className="container-fluid navbar navbar-expand-lg bg-body-light" id="top">
        <div className="container-fluid flexDiv">

          <button className="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link prefetch={false}
            className="navbarbrand"
            href='/'
          >Scoop<span>Review</span></Link>
          <form id="searchform" role="search">
               <Search/>
               </form>
          <div className="collapse navbar-collapse colllpableBox" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            
              <li className="nav-item">
                <Link prefetch={false}
                  className={pathname === '/reviews' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/reviews'
                >
                  REVIEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch={false}
                  className={pathname === '/blogs' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/blogs'
                  shallow={true}
                >
                  BLOGS
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link prefetch={false}
                  className={pathname === '/categories' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/categories'
                >
                  CATEGORIES
                </Link>              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )

}
export default Header;