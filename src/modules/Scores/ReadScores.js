import getAllScores from '../../api/Score.js';

const ReadScores = async (gameId) => {
  const response = await getAllScores(gameId);
  return response;
};

export default ReadScores;