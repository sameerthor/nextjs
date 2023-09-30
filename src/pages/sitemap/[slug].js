
import { getServerSideSitemapLegacy } from 'next-sitemap'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(ctx)  
    {
    var alphabet = ctx.params.slug;

       
          const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/sitemap?alph=${alphabet}`);
          const data = await response.json();
          const fields = data
          .map((v) => {return ({loc:`${publicRuntimeConfig.webUrl}${v.slug}`,lastmod:new Date().toISOString()})});
;
          return getServerSideSitemapLegacy(ctx, fields)
};
export default function Sitemap() {}
