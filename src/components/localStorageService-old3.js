// Daten speichern
export const saveData = (key, data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  };
  
  // Daten laden
  export const loadData = (key) => {
    const dataString = localStorage.getItem(key);
    return dataString ? JSON.parse(dataString) : null;
  };
  
  // Daten löschen
  export const clearData = (key) => {
    localStorage.removeItem(key);
  };