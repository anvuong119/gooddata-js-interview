const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    _assets: path.resolve(__dirname, 'src/assets'),
    _components: path.resolve(__dirname, 'src/components'),
    _pages: path.resolve(__dirname, 'src/pages'),
    _routes: path.resolve(__dirname, 'src/routes'),
    _constants: path.resolve(__dirname, 'src/constants'),
    _utils: path.resolve(__dirname, 'src/utils'),
    _redux: path.resolve(__dirname, 'src/redux'),
    _i18n: path.resolve(__dirname, 'src/i18n'),
  }),
);
