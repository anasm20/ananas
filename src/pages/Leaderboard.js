import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../components/localStorageService';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const storedLeaderboard = getLeaderboard();
    setLeaderboard(storedLeaderboard);
  }, []);

  return (
    <div>
      <h2>Leaderboard ... in bearbeitung - coming soon</h2>
      <table>
        <thead>
          <tr>
            <th>Benutzername</th>
            <th>Punkte</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user.userName + index}> {/* Verwendung eines eindeutigeren Schlüssels */}
              <td>{user.userName}</td>
              <td>{user.score}</td>
              <td>{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
