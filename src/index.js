import './style.css';
import saveToLocalStorage from './modules/Game/SaveIdGame.js';
import readLocalStorage from './modules/Game/ReadIdGame.js';
import getGameId from './api/Game.js';
import createScore from './modules/Scores/CreateScore.js';
import displayScores from './modules/Scores/DisplayScores.js';

let gameId = null;
const currentIdGame = readLocalStorage();

const getId = async () => {
  const result = await getGameId('My game score');
  const gameId = result.result.replace('Game with ID: ', '').replace(' added.', '');
  saveToLocalStorage(gameId);
  return gameId;
};

gameId = currentIdGame?.id ? currentIdGame.id : getId();

// Submit form
const form = document.getElementById('add-score-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createScore(gameId);
});

// Get recorded data
const refreshScore = document.getElementById('refresh-score');
refreshScore.addEventListener('click', () => {
  displayScores(gameId);
});

displayScores(gameId);