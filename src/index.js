import './style.css';
import SaveToLocalStorage from './modules/Game/SaveIdGame.js';
import ReadLocalStorage from './modules/Game/ReadIdGame.js';
import getGameId from './api/Game.js';
import CreateScore from './modules/Scores/CreateScore.js';
import ReadScores from './modules/Scores/ReadScores.js';

/* SaveToLocalStorage('asdsasadasd'); */
let gameId = null;
const currentIdGame = ReadLocalStorage();

const getId = async () => {
  const result = await getGameId('My game score');
  const gameId = result.result.replace('Game with ID: ', '').replace(' added.', '');
  SaveToLocalStorage(gameId);
  return gameId;
};

gameId = currentIdGame?.id ? currentIdGame.id : getId();

// Submit form
const form = document.getElementById('add-score-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await CreateScore(gameId);
});

// Get recorded data
const refreshScore = document.getElementById('refresh-score');
refreshScore.addEventListener('click', async () => {
  const listScores = document.getElementById('list-scores');

  // Remove previous data
  const prevLi = listScores.querySelectorAll('li');
  prevLi.forEach((li) => {
    li.remove();
  });

  const response = await ReadScores(gameId);
  response?.result.map((record) => {
    const { user, score } = record;
    const liScore = document.createElement('li');
    liScore.classList.add('list-group-item', 'list-group-item-action');
    liScore.textContent = user + score;

    return listScores.appendChild(liScore);
  });
});