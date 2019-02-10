const express = require('express');
const path = require('path');

const app = express();

// Serve output from Webpack
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const port = process.env.PORT || 3000;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`UI Running on Port ${port}`);
