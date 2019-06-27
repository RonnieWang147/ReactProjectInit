const React = require('react');
const express = require('express');
const ReactDOM = require('react-dom/server');
// eslint-disable-next-line import/no-unresolved
const { Default } = require('react-css-spinner');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const el = React.createElement(Default);
  const html = ReactDOM.renderToString(el);
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  ${html}
</body>
</html>`);
});

app.listen(port, () => console.log(`listen to ${port}`));
