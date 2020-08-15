const withCSS = require('@zeit/next-css');
// next.preview.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS({}))
