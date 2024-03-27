// localStorageService.js
export const saveUserScore = (userName, score) => {
  if (!userName) return; // Validierung des Benutzernamens

  const users = JSON.parse(localStorage.getItem('users')) || {};
  const user = users[userName] || { score: 0, level: 1 };
  user.score += score; // Update der Punktzahl
  user.level = Math.floor(user.score / 100) + 1; // Berechnung des Levels basierend auf der Punktzahl
  users[userName] = user;
  localStorage.setItem('users', JSON.stringify(users)); // Speichern im Local Storage
};

export const getLeaderboard = () => {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  return Object.entries(users)
    .map(([userName, { score, level }]) => ({ userName, score, level }))
    .sort((a, b) => b.score - a.score); // Sortierung nach Punktzahl in absteigender Reihenfolge
};


export const saveData = (key, data) => {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
};

export const loadData = (key) => {
  const dataString = localStorage.getItem(key);
  return dataString ? JSON.parse(dataString) : null;
};

export const clearData = (key) => {
  localStorage.removeItem(key);
};
