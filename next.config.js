/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
    ],
  ],
  images: {
    domains: ['localhost','scoopreview.com'],
  },
  publicRuntimeConfig: {
    apiBaseUrl: 'https://admin.scoopreview.com/scoop/public/',
    imageUrl:'https://scoopreview.com/',
    webUrl:'https://scoopreview.com/'
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
    return config;
  }
  ,
  rewrites: async () => [
    {
      source: '/sitemap.xml',
      destination: '/sitemap',
    },
    {
      source: '/sitemap-:slug.xml',
      destination: '/sitemap/:slug',
    },
  ],
}

module.exports = nextConfig;

