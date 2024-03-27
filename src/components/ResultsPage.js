import React, { useState, useEffect } from 'react';
import { loadData } from './localStorageService';

function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Lädt die gespeicherten Quiz-Ergebnisse beim Initialisieren
    const savedResults = loadData('quizResults');
    if (savedResults) {
      setResults(savedResults);
    }
  }, []);

  return (
    <div>
      <h2>Quiz-Ergebnisse</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              Quiz {index + 1}: {result.score}%
            </li>
          ))}
        </ul>
      ) : (
        <p>Keine Ergebnisse gefunden.</p>
      )}
    </div>
  );
}

export default ResultsPage;
