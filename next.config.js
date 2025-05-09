/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', 'scoopreview.com'],
    unoptimized: true,
  },
  publicRuntimeConfig: {
    apiBaseUrl: 'https://admin.scoopreview.com/',
    imageUrl: 'https://scoopreview.com/',
    webUrl: 'https://scoopreview.com/'
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
    let hasFound = false

    for (let i = 0; i < config.module.rules.length; i++) {
      const rule = config.module.rules[i]

      if (!rule.oneOf) continue

      rule.oneOf.forEach(one => {
        if (!`${one.issuer?.and}`.includes('_app')) return
        one.issuer.and = [path.resolve(__dirname)]
        hasFound = true
      })

      if (hasFound) break
    }
    Object.assign(config.resolve.alias, {
      "react/jsx-runtime.js": "preact/compat/jsx-runtime",
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    });


    return config;
  }
  ,
  rewrites: async () => [
    {
      source: '/scooprevsitemap.xml',
      destination: '/sitemap-stores',
    },
    {
      source: '/scooprevsitemap-:slug.xml',
      destination: '/sitemap-stores/:slug',
    },
  ],
}

module.exports = nextConfig;

