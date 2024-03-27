import React, { useState, useEffect } from 'react';
import { Button, Card, ProgressBar, Accordion, Form, Alert } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import '../styles/Quiz.css';

const questions = [
  // Vorhandene Fragen
  {
    text: "Was ist die Hauptstadt von Australien?",
    options: [
      { id: 0, text: "Sydney" },
      { id: 1, text: "Canberra", correct: true },
      { id: 2, text: "Melbourne" },
    ],
  },
  // Hinzugefügte Fragen
  {
    text: "Welches Modell wird für die Verarbeitung natürlicher Sprache in der KI verwendet?",
    options: [
      { id: 0, text: "Convolutional Neural Network" },
      { id: 1, text: "Recurrent Neural Network", correct: true },
      { id: 2, text: "Random Forest" },
    ],
  },
  {
    text: "Was ist eine Cloud-Datenbank?",
    options: [
      { id: 0, text: "Eine Datenbank, die lokal auf einem Server gespeichert ist" },
      { id: 1, text: "Eine Datenbank, die auf Cloud-Infrastruktur-Services ausgeführt wird", correct: true },
      { id: 2, text: "Eine Datenbank, die nur temporäre Daten speichert" },
    ],
  },
  // Weitere Fragen hier hinzufügen
];

function QuizTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizEnd, setQuizEnd] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [userName, setUserName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const storedBestScore = localStorage.getItem('bestScore');
    if (storedBestScore) {
      setBestScore(parseFloat(storedBestScore));
    }
  }, []);

  const question = questions[currentQuestionIndex];

  const handleAnswer = (optionId) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: optionId });
    setShowWarning(false); // Hide warning after selecting an answer
  };

  const startQuiz = () => {
    if (userName.trim() === '') {
      setShowWarning(true);
      return;
    }
    setQuizStarted(true);
  };

  const goToNextQuestion = () => {
    if (userAnswers[currentQuestionIndex] === undefined) {
      setShowWarning(true); // Show warning if no answer selected
      return;
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnd(true);
      const score = calculateScore();
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem('bestScore', score.toString());
      }
    }
  };

  const restartQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizEnd(false);
    setShowResults(false);
    setShowWarning(false);
    setQuizStarted(false);
    setUserName('');
  };

  const calculateScore = () => {
    let score = 0;
    Object.entries(userAnswers).forEach(([questionIndex, selectedOptionId]) => {
      const question = questions[questionIndex];
      const selectedOption = question.options.find(option => option.id === selectedOptionId);
      if (selectedOption && selectedOption.correct) {
        score++;
      }
    });
    return (score / questions.length) * 100; // Calculate score percentage
  };

  return (
    <Card style={{maxWidth: '900px', margin: 'auto', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    {/* <Card className="quiz-card"> */}
      <Card.Body>
        {!quizStarted ? (
          <div style={{textAlign: 'center'}}>
            <Form.Group>
              <Form.Label>Bitte gib deinen Namen ein:</Form.Label>
              <Form.Control 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
              />
            </Form.Group>
            {showWarning && <Alert variant="danger">Bitte gib deinen Namen ein.</Alert>}
            <Button variant="primary" onClick={startQuiz}>Start Quiz</Button>
          </div>
        ) : !quizEnd ? (
          <>
            <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
              <p>Hallo, {userName}!</p>
              <p>Frage {currentQuestionIndex + 1} von {questions.length}</p>
              <Card.Title>{question.text}</Card.Title>
            </div>
            <Form>
              {question.options.map((option) => (
                <Form.Check
                  key={option.id}
                  type="radio"
                  id={`option-${option.id}`}
                  label={option.text}
                  name="options"
                  checked={userAnswers[currentQuestionIndex] === option.id}
                  onChange={() => handleAnswer(option.id)}
                />
              ))}
            </Form>
            {showWarning && <Alert variant="danger">Bitte wähle eine Antwort aus.</Alert>}
            <div style={{textAlign: 'center', marginTop: '20px'}}>
              <Button onClick={goToNextQuestion}>Nächste Frage</Button>
            </div>
          </>
        ) : (
          <>
            <Card.Title style={{textAlign: 'center'}}>Super "{userName}" deine Quiz-Test ist Fertig!</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>Dein Score ist: {calculateScore().toFixed(2)}%</Card.Text>
            <Card.Text style={{textAlign: 'center'}}>Deine Beste Rekord ist: {bestScore.toFixed(2)}%</Card.Text>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
              <Button onClick={restartQuiz}>Neustart</Button>
              <Button onClick={() => setShowResults(!showResults)}>Ergebnisse</Button>
            </div>
            {showResults && (
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quiz Antworten</Accordion.Header>
                  <Accordion.Body>
                    {questions.map((question, index) => {
                      const selectedOptionId = userAnswers[index];
                      const selectedOption = question.options.find(option => option.id === selectedOptionId);
                      return (
                        <div key={index}>
                          <p>
                            Frage {index + 1}: {question.text} - 
                            Deine Antwort: {selectedOption ? selectedOption.text : 'Keine Antwort ausgewählt'} - 
                            {selectedOption && selectedOption.correct ? <BsCheckCircle color="green" /> : <BsXCircle color="red" />}
                          </p>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
  
  
}

export default QuizTest;
