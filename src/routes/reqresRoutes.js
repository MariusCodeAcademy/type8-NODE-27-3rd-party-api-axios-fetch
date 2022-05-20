const express = require('express');

const reqresRouter = express.Router();

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

// POST /create-user  {name, ocupation}
// goes to https://reqres.in/api/users sends {name, job} gets response
// response back to user

module.exports = reqresRouter;
