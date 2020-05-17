const path = require('path');
module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
  ],
  stories: ['../components/**/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options:{
            configFileName: path.resolve(__dirname, './tsconfig.json')
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options:{
            tsconfigPath: path.resolve(__dirname, './tsconfig.json'),

          }
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
