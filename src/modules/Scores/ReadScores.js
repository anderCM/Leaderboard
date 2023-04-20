import getAllScores from '../../api/Score.js';

const readScores = async (gameId) => {
  const response = await getAllScores(gameId);
  return response;
};

export default readScores;