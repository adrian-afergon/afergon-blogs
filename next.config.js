const withCSS = require('@zeit/next-css')
// next.preview.js
const withSass = require('@zeit/next-sass')

const modules = ['cliui',
  'colorette',
  'flatted',
  'get-package-type',
  'mdast-util-from-markdown',
  'mdast-util-to-string',
  'micromark',
  'micromark-core-commonmark',
  'micromark-factory-destination',
  'micromark-factory-label',
  'micromark-factory-space',
  'micromark-factory-title',
  'micromark-factory-whitespace',
  'micromark-util-character',
  'micromark-util-chunked',
  'micromark-util-classify-character',
  'micromark-util-combine-extensions',
  'micromark-util-decode-numeric-character-reference',
  'micromark-util-encode',
  'micromark-util-html-tag-name',
  'micromark-util-normalize-identifier',
  'micromark-util-resolve-all',
  'micromark-util-sanitize-uri',
  'micromark-util-subtokenize',
  'micromark-util-symbol',
  'micromark-util-types',
  'nanoid',
  'react-markdown',
  'remark-parse',
  'remark-rehype',
  'unist-util-visit-parents',
  'yargs',
  'yargs-parser']

const withTM = require('next-transpile-modules')(modules)

module.exports = withTM(withSass(withCSS({
  target: 'serverless',
  webpack5: false,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
})))
