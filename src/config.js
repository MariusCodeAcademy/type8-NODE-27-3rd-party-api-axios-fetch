require('dotenv').config();

const port = +process.env.SERVER_PORT || 5000;

module.exports = {
  port,
};
