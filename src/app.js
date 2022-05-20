const express = require('express');
const { port } = require('./config');
const norisRouter = require('./routes/norisRoutes');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

// Routes
app.use('/api/', norisRouter);

app.listen(port, () => console.log('Server listening on port ' + port));
