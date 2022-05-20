const express = require('express');

const reqresRouter = express.Router();
const axios = require('axios').default;

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

// POST /create-user  {name, ocupation}
reqresRouter.post('/create-user', async (req, res) => {
  const newUserObj = {
    name: req.body.name,
    job: req.body.ocupation,
  };
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUserObj),
  });
  const data = await response.json();
  res.json(data);
});

reqresRouter.post('/create-axios', async (req, res) => {
  const newUserObj = {
    name: req.body.name,
    job: req.body.ocupation,
  };
  const response = await axios.post('https://reqres.in/api/users', newUserObj);
  console.log('response ===', response);
  res.json(response.data);
});
// goes to https://reqres.in/api/users sends {name, job} gets response
// response back to user

module.exports = reqresRouter;
