import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Willkommen zum AI und Cloud Computing Lernportal</h1>
      <p>Bereit, mehr über künstliche Intelligenz und Cloud Computing zu lernen?</p>
      <Link to="/quiz-test">Teste dein Wissen</Link>
    </div>
  );
}

export default Home;
