const SaveToLocalStorage = (value) => {
  localStorage.setItem('game', JSON.stringify({ id: value }));
};

export default SaveToLocalStorage;