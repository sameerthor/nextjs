
import { getServerSideSitemapLegacy } from 'next-sitemap'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }
export async function getServerSideProps(ctx)  
    {
    var alphabet = ctx.params.slug;

       
          const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}api/sitemap?alph=${alphabet}`);
          const data = await response.json();
          const fields = data
          .map((v) => {return ({loc:`${publicRuntimeConfig.webUrl}${escapeHtml(v.slug)}`,lastmod:new Date().toISOString()})});
;
          return getServerSideSitemapLegacy(ctx, fields)
};
export default function Sitemap() {}
