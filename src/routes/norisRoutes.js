const express = require('express');
const norisRouter = express.Router();

const axios = require('axios').default;
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Routes
norisRouter.get('/joke', async (req, res) => {
  // fetch data from https://api.chucknorris.io/jokes/random
  // return a joke to user
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  const letsReturn = {
    joke: data.value,
    iconUrl: data.icon_url,
  };
  res.json(letsReturn);
});

norisRouter.get('/joke-axios', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log('response ===', data);
    res.json(data);
  } catch (error) {
    console.log('error ===', error);
    res.status(500).json(error);
  }
});

// GET /joke-categories - returns a list of categories from https://api.chucknorris.io/jokes/categories

module.exports = norisRouter;
