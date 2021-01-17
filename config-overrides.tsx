const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    _assets: path.resolve(__dirname, 'src/assets'),
    _components: path.resolve(__dirname, 'src/components'),
    _constants: path.resolve(__dirname, 'src/constants'),
    _containers: path.resolve(__dirname, 'src/containers'),
    _pages: path.resolve(__dirname, 'src/pages'),
    _routes: path.resolve(__dirname, 'src/routes'),
    _services: path.resolve(__dirname, 'src/services'),
    _themes: path.resolve(__dirname, 'src/themes'),
  }),
);
