const path = require('path');
module.exports = {
  stories: ['../src/components/**/**/*.stories.@tsx'],
  addons: [
    'storybook-dark-mode/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register'
  ],
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
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
