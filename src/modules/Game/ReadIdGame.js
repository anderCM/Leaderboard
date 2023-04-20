const readLocalStorage = () => JSON.parse(localStorage.getItem('game'));

export default readLocalStorage;