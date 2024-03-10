import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import hinzugefügt

function HomePage() {
  const [activeKey, setActiveKey] = useState('0');
  const navigate = useNavigate(); // Hook für die Navigation

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  // Funktion zum Navigieren zur QuizTest-Seite
  const startQuiz = () => {
    navigate('/quiz-test');
  };

  return (
    <div className="home-container">
      <h1>Willkommen zu Ananas-Lernportal über AI und Cloud Computing</h1>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
      
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Was ist künstliche Intelligenz (KI)?
          </Accordion.Header>
          <Accordion.Body>
            Künstliche Intelligenz ist ein Bereich der Informatik, der sich damit beschäftigt, Maschinen die Fähigkeit zu geben, intelligentes Verhalten zu zeigen.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Was ist Cloud Computing?
          </Accordion.Header>
          <Accordion.Body>
            Cloud Computing bezeichnet die Bereitstellung von IT-Infrastruktur und Rechenleistung über das Internet, wobei Nutzer auf Ressourcen zugreifen können, ohne diese physisch vor Ort haben zu müssen.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Button onClick={startQuiz} className="mt-3">Quiz Test Anfangen</Button> 
    </div>
  );
}

export default HomePage;
