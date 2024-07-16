const { override, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@/components': resolve(__dirname, 'src/components'),
    '@/redux': resolve(__dirname, 'src/redux'),
    '@/router': resolve(__dirname, 'src/router'),
    '@/utils': resolve(__dirname, 'src/utils'),
    '@/service': resolve(__dirname, 'src/service'),
    '@/pages': resolve(__dirname, 'src/pages'),
    '@/interfaces': resolve(__dirname, 'src/interfaces'),
    '@/layout': resolve(__dirname, 'src/layout'),
    '@/assets': resolve(__dirname, 'src/assets'),
    '@/hooks': resolve(__dirname, 'src/hooks'),
    '@/constants': resolve(__dirname, 'src/constants'),
    '@/api': resolve(__dirname, 'src/api'),
    '@/helper': resolve(__dirname, 'src/helper'),
    "@/style/*": resolve(__dirname, 'src/style'),
  })
);
