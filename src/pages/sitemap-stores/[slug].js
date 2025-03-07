import { getServerSideSitemapLegacy } from 'next-sitemap';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function getServerSideProps(ctx) {
    const alphabet = ctx.params.slug;  // Get dynamic slug from params
    let fields = [];

    try {
        const response = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/sitemap?alph=${alphabet}`);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        fields = data.map((v) => ({
            loc: `${publicRuntimeConfig.webUrl}${escapeHtml(v.slug)}`,
            lastmod: v.date,
            changefreq: v.changefreq,
        }));
    } catch (error) {
        console.error('Error fetching sitemap data:', error);
    }

    return getServerSideSitemapLegacy(ctx, fields);
}

// This component is not used but required for Next.js
export default function Sitemap() {}
