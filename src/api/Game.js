const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const getGameId = async (gameName) => {
  try {
    const headers = {
      method: 'POST',
      body: JSON.stringify({ name: gameName }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${url}/games`, headers);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const saveRecord = async (gameId, user, score) => {
  try {
    const headers = {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${url}/games/${gameId}/scores`, headers);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default getGameId;