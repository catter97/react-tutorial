module.exports = () => (req, res) => {
  res.send(`
  <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
        <link rel="stylesheet" type="text/css" href="dist/bundle.css" />  
      </head>
      <body>
        <div id="root"></div>
        <script src="dist/bundle.js"></script>
      </body>
    </html>`);
};
