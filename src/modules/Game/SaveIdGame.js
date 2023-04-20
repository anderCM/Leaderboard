const saveToLocalStorage = (value) => {
  localStorage.setItem('game', JSON.stringify({ id: value }));
};

export default saveToLocalStorage;