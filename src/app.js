const express = require('express');
const { port } = require('./config');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => console.log('Server listening on port ' + port));
