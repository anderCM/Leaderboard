import { saveRecord } from '../../api/Game.js';
import SimpleToast from '../../Components/Toasts.js';

const CreateScore = async (gameId) => {
  const scoreUser = document.getElementById('score-name');
  const scorePoints = document.getElementById('score-score');
  const result = await saveRecord(gameId, scoreUser.value, scorePoints.value);
  if (result.message) {
    SimpleToast.fire('Error', result.message, 'error');
    return;
  }
  SimpleToast.fire('Submited', result.result, 'success');
  scoreUser.value = '';
  scorePoints.value = '';
};

export default CreateScore;
