const withCSS = require('@zeit/next-css');
// next.preview.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS({
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}))
