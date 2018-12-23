const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';
module.exports = () => {
  const entry = ['./src/index.jsx'];
  const plugins = [];

  const configuration = {
    entry,
    mode,
    module: {
      rules: [
        {
          exclude: /node_module/,
          include: path.resolve(__dirname, 'src'),
          test: /\.jsx$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            },
          },
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    plugins,
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        path.resolve(__dirname),
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
  };

  if (mode === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  } else {
    configuration.devtool = '#source-map';
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return configuration;
};
