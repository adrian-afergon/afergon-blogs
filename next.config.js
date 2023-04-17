const routes = require('./locale-routes.json')

const rewriteRoutes = Object.entries(routes).map(([locale, localeRoutes]) => {
  return Object.entries(localeRoutes).map(([original, translation]) => ({
    source: `/${locale}${translation}`,
    destination: `/${locale}${original}`,
    locale: false,
  }))
}).flat()

/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')
const nextConfig = {
  reactStrictMode: true,
  i18n,
  rewrites:() => rewriteRoutes
}

module.exports = nextConfig
