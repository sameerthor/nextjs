'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import { Search } from 'semantic-ui-react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export function Header() {

  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

 

  const handleSearchChange = async (e, query) => {
    setLoading(true);
    var keyword = query.value;
    setValue(keyword);
    const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/search-stores?q=${keyword}`);
    const data = await response.json();
    const filtered = data

    if (filtered.length > 0) {
        setResults(filtered);
    } else {
        setResults([]);
    }
    setLoading(false);
}

  return (

    <header>
      <nav className="container-fluid navbar navbar-expand-lg bg-body-light" id="top">
        <div className="container-fluid col sm-8">

          <button className="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link prefetch={false}
            className="navbarbrand mx-auto"
            href='/'
          >Scoop<span>Review</span></Link>
          <form id="searchform" role="search">
          <Search
                                fluid
                                loading={loading}
                                size="small"
                                input={{ fluid: true }}
                                placeholder="Search for stores..."
                                onResultSelect={(e, data) =>{
                                    setValue(data.result.title);window.location.replace(data.result.slug);

                                }}
                                onSearchChange={handleSearchChange}
                                results={results}
                                value={value}
                            />      </form>
          <div className="collapse navbar-collapse" id="navbarScroll">
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
              <li className="nav-item">
                <Link prefetch={false}
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