module.exports = () => (req, res) => {
  res.send(`
  <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="dist/bundle.css" />  
      </head>
      <body>
        <div id="root"></div>
        <script src="dist/bundle.js"></script>
      </body>
    </html>`);
};
