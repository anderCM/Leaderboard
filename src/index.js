import './style.css';
import SaveToLocalStorage from './modules/Game/SaveIdGame.js';
import ReadLocalStorage from './modules/Game/ReadIdGame.js';
import getGameId from './api/Game.js';
import CreateScore from './modules/Scores/CreateScore.js';
import DisplayScores from './modules/Scores/DisplayScores.js';

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  CreateScore(gameId);
});

// Get recorded data
const refreshScore = document.getElementById('refresh-score');
refreshScore.addEventListener('click', () => {
  DisplayScores(gameId);
});

DisplayScores(gameId);