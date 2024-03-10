import React, { useState } from 'react';
import { Button, Card, ProgressBar, Accordion } from 'react-bootstrap';
import '../styles/Quiz.css';

const questions = [
    // Vorhandene Frage
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
    // Fügen Sie hier weitere Fragen hinzu
  ];
  

function QuizTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizEnd, setQuizEnd] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: option });
  };

  const goToNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnd(true);
    }
  };

  const restartQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizEnd(false);
    setShowResults(false);
  };

  const calculateScore = () => {
    return Object.values(userAnswers).filter((answer) => answer.correct).length;
  };

  return (
    <Card className="quiz-card">
      <Card.Body>
        {!quizEnd ? (
          <>
            <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
            <Card.Title>{question.text}</Card.Title>
            {question.options.map((option) => (
              <Button
                key={option.id}
                variant={userAnswers[currentQuestionIndex]?.id === option.id ? 'primary' : 'secondary'}
                onClick={() => handleAnswer(option)}
              >
                {option.text}
              </Button>
            ))}
            <Button onClick={goToNextQuestion}>
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </>
        ) : (
          <>
            <Card.Title>Quiz Completed</Card.Title>
            <Card.Text>Your score is {calculateScore()} out of {questions.length}</Card.Text>
            <Button onClick={restartQuiz}>Restart Quiz</Button>
            <Button onClick={() => setShowResults(!showResults)}>Show Results</Button>
            {showResults && (
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quiz Answers</Accordion.Header>
                  <Accordion.Body>
                    {Object.entries(userAnswers).map(([questionIndex, answer], index) => (
                      <p key={index}>
                        Q{parseInt(questionIndex) + 1}: {questions[questionIndex].text} - 
                        Your Answer: {answer.text} - 
                        {answer.correct ? " Correct" : " Wrong"}
                      </p>
                    ))}
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
