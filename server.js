const express = require('express');
const connect = require('connect');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const templete = require('./templete');

const config = require('./webpack.config')();

const app = express();

const compiler = webpack(config);
const middleware = connect();
middleware.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

middleware.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));
app.use((req, res, next) => middleware(req, res, next));

app.get('*', (req, res) => {
  templete()(req, res);
});

app.listen(3000);