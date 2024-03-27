import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [activeKey, setActiveKey] = useState('0');
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const startQuiz = () => {
    navigate('/quiz-test');
  };

  return (
    <div className="home-container">
      <h1>Willkommen zu Ananas-Lernportal über AI und Cloud Computing</h1>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        {/* Vorhandene Items */}
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
        {/* Neue Items */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Wie funktioniert maschinelles Lernen?
          </Accordion.Header>
          <Accordion.Body>
            Maschinelles Lernen ist ein Teilbereich der KI, der es Computern ermöglicht, aus Daten zu lernen und Entscheidungen zu treffen oder Vorhersagen zu treffen, ohne explizit programmiert zu werden.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Was ist ein Neuronales Netzwerk?
          </Accordion.Header>
          <Accordion.Body>
            Neuronale Netzwerke sind computergestützte Modelle, die von der Arbeitsweise menschlicher Gehirne inspiriert sind und aus Schichten von Knoten oder "Neuronen" bestehen, die komplexe Muster in Daten erkennen können.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Vorteile von Cloud-Speicher
          </Accordion.Header>
          <Accordion.Body>
            Cloud-Speicher bietet Skalierbarkeit, Flexibilität und Kosteneffizienz, da Unternehmen nur für den Speicherplatz zahlen, den sie tatsächlich nutzen, und den Speicher bei Bedarf erweitern können.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Was sind Cloud-Services?
          </Accordion.Header>
          <Accordion.Body>
            Cloud-Services sind Dienste, die über das Internet bereitgestellt werden und reichen von Software- und Plattformdiensten bis hin zu Infrastrukturlösungen, die herkömmliche On-Premise-Systeme ersetzen oder ergänzen.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Button onClick={startQuiz} className="mt-3">Quiz Test Anfangen</Button>
    </div>
  );
}

export default HomePage;