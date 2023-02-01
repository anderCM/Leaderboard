const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const getAllScores = async (gameId) => {
  try {
    const response = await fetch(`${url}/games/${gameId}/scores`);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export default getAllScores;