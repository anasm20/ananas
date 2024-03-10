import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

function HomePage() {
  const [activeKey, setActiveKey] = useState('0');

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <div className="home-container">
      <h1>Willkommen zu Ananas-Lernportal über AI und Cloud Computing</h1>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        <Card>
          <Accordion.Header eventKey="0">
            Was ist künstliche Intelligenz (KI)?
          </Accordion.Header>
          <Accordion.Body eventKey="0">
            Künstliche Intelligenz ist ein Bereich der Informatik, der sich damit beschäftigt, Maschinen die Fähigkeit zu geben, intelligentes Verhalten zu zeigen.
          </Accordion.Body>
        </Card>
        <Card>
          <Accordion.Header eventKey="1">
            Was ist Cloud Computing?
          </Accordion.Header>
          <Accordion.Body eventKey="1">
            Cloud Computing bezeichnet die Bereitstellung von IT-Infrastruktur und Rechenleistung über das Internet, wobei Nutzer auf Ressourcen zugreifen können, ohne diese physisch vor Ort haben zu müssen.
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
}

export default HomePage;
