'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export function Header() {

  const pathname = usePathname();

  return (

    <header>
      <nav className="container-fluid navbar navbar-expand-lg bg-body-light" id="top">
        <div className="container-fluid col sm-8">

          <button className="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbarbrand mx-auto"
            href='/'
          >ScoopReview</Link>
          <form id="searchform" role="search">
            <input id="form-control" type="search" placeholder="Search  for stores ...." aria-label="Search" />
            <button id="searchbtn" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
              <Link
                  className={pathname === '/reviews' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/reviews'
                >
                  REVIEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={pathname === '/blogs' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/blogs'
                  shallow={true}
                >
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={pathname === '/categories' ? 'text-blue nav-link' : 'text-black nav-link'}
                  href='/categories'
                >
                  CATEGORIES
                </Link>              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )

}
export default Header;