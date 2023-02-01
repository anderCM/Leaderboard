import ReadScores from './ReadScores.js';

const DisplayScores = async (gameId) => {
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
};

export default DisplayScores;