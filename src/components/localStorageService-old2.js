export const saveUserScore = (userName, score) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = users[userName] || { score: 0, level: 1 };
    user.score += score; // Gesamtpunktzahl aktualisieren
    user.level = Math.floor(user.score / 100) + 1; // Level basierend auf Punkten aktualisieren
    users[userName] = user;
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const getUserScore = (userName) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    return users[userName] || { score: 0, level: 1 };
  };
  
  export const getLeaderboard = () => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    return Object.entries(users)
      .map(([userName, { score, level }]) => ({ userName, score, level }))
      .sort((a, b) => b.score - a.score); // Sortiert absteigend nach Punktzahl
  };
  