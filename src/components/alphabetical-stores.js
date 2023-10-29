
import { useState,useEffect } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
const { publicRuntimeConfig } = getConfig()
var offset=0;

export function alphabeticalStores({alpha}) {

   const [stores,setStores]=useState([]);

   useEffect(() => {
    fetchStores();
}, [])


const fetchStores = async (i) => {
        const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/alphabetical-stores?query=${alpha}&offset=${offset}`);
        const data = await response.json();
        setStores((currentFilteredProducts) => ([...currentFilteredProducts, ...data]));

}

    return (
        <> <div className="alpha-box" id={`${alpha}box`}>
            <div className="alpha-header">
                <span className="title">{alpha}</span>
                <a href="javascript:void(0)" onClick={(e)=>{fetchStores(++offset)}}>Load More<i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
            </div>
            <div className="alpha-content">
                {stores.map((item)=> <Link href={`/${item.slug}`} className="order"><span></span>{item.name}</Link>
)}
             
            </div>
        </div></>
    )

}
export default alphabeticalStores;