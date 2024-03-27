import React, { useState, useEffect } from 'react';
import { saveData, loadData } from './localStorageService';

function Settings() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Lädt den gespeicherten Benutzernamen beim Initialisieren
    const savedUsername = loadData('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleSave = () => {
    saveData('username', username); 
    alert('Einstellungen gespeichert!');
  };

  return (
    <div>
      <h2>Einstellungen</h2>
      <label>
        Benutzername:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}

export default Settings;
