/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    apiBaseUrl: 'https://scoopreview.com/scoop/public/',
    imageUrl:'https://scoopreview.com/'
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

}

module.exports = nextConfig;
