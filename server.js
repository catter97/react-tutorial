const express = require('express');
const connect = require('connect');
const webpack = require('webpack');
const httpProxy = require('http-proxy');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const templete = require('./templete');

const config = require('./webpack.config')();

const app = express();

const apiProxy = httpProxy.createProxyServer();
app.all('/api/*', (req, res) => {
  apiProxy.web(req, res, { target: 'http://192.168.0.71:8088' }, e => console.error(e.toString())); // eslint-disable-line no-console
});

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