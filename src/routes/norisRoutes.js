const express = require('express');

const norisRouter = express.Router();

// Routes
norisRouter.get('/joke', async (req, res) => {
  res.json('geting a joke');
});

module.exports = norisRouter;
