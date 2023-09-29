import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


const Sitemap = () => {};
const toUrl = (url) =>
  `<sitemap><loc>${url}</loc></sitemap>`;
  
const createSitemap = (urlList) => 
  `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList.map((url) => toUrl(url)).join("")}
    </sitemapindex>`;

export async function getServerSideProps({res,req})  {

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const urlList = alphabet
    .map((v) => `${publicRuntimeConfig.webUrl}sitemap-${v}.xml`);
    urlList.push(`${publicRuntimeConfig.webUrl}sitemap-core.xml`);
    urlList.push(`${publicRuntimeConfig.webUrl}sitemap-categories.xml`);


const sitemap = createSitemap(urlList);
	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();
	return { props: { results : {urlList}}}};


// Default export to prevent Next.js errors
export default function MemorialSitemapIndexPage() {}