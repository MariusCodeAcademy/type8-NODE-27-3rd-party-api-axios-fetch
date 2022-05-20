console.log('frontend');
const BASE_URL = 'http://localhost:3000/api';

const jokeEl = document.getElementById('out');

// get Joke from backend
async function getJoke(callback) {
  const response = await fetch(`${BASE_URL}/joke`);
  const data = await response.json();
  console.log('data ===', data);
  callback(data.joke, jokeEl);
}

// getJoke(showJoke);

// display joke in #out
function showJoke(joke, dest) {
  dest.textContent = joke;
}
