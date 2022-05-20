const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { port } = require('./config');
const norisRouter = require('./routes/norisRoutes');
const reqresRouter = require('./routes/reqresRoutes');
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

// Routes
app.use('/api/', norisRouter);
app.use('/api/', reqresRouter);

app.listen(port, () => console.log('Server listening on port ' + port));
