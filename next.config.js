const withCSS = require('@zeit/next-css');
// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS({}))
