// HomePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from '../components/Card';
import gameImage from '../img/logo.png'; // Beispielbild für Spiele
import puzzleImage from '../img/logo.png'; // Beispielbild für Rätsel
import quizImage from '../img/logo.png'; // Beispielbild für Quiz

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h2>Willkommen zu Ananas-Lernportal über AI und Cloud Computing</h2>
      <div className="row">
        {/* Verwende die Card-Komponente für die Wiederholungen */}
        <Card title="Lernen" buttonText="JETZT STARTEN" link="/information" image={gameImage} />
        <Card title="Flipp-Card" buttonText="JETZT STARTEN" link="/flipp-card" image={puzzleImage} />
        <Card title="Quiz" buttonText="JETZT STARTEN" link="/quiz-test" image={quizImage} />
        {/* Weitere Karten hier hinzufügen */}
      </div>

      <div className="accordion my-5" id="faqAccordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Wie lange dauert das Quiz?
              </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
            <div className="card-body">
              Die Dauer des Quizzes kann variieren...
            </div>
          </div>
        </div>
        {/* Weitere FAQ-Akkordeon-Einträge hier hinzufügen */}
      </div>
    </div>
  );
};

export default HomePage;
