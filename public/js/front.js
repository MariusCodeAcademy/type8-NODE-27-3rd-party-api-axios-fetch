console.log('frontend');
const BASE_URL = 'http://localhost:3000/api';

const jokeEl = document.getElementById('out');

// get Joke from backend
async function getJoke(callback) {
  try {
    const response = await fetch(`${BASE_URL}/joke`);
    const data = await response.json();
    console.log('data ===', data);
    callback(data.joke, jokeEl);
  } catch (error) {
    console.log('error getJoke ===', error);
  }
}

async function getJokeAxios() {
  try {
    const { data } = await axios.get(`${BASE_URL}/joke`);
    console.log('response ===', data);
  } catch (error) {
    console.log('error getJokeAxios ===', error);
    console.log(error.response.data);
  }

  // callback(data.joke, jokeEl);
}
// getJokeAxios();
getJoke(showJoke);

// display joke in #out
function showJoke(joke, dest) {
  dest.textContent = joke;
}
