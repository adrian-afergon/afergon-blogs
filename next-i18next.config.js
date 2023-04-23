/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: process.env.DEFAULT_LOCALE ?? 'en',
    locales: ['en', 'es'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
      typeof window === 'undefined'
          ? require('path').resolve('./public/locales')
          : '/locales',
}
