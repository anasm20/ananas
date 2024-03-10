import React, { useState } from 'react';

// Beispiel-Daten für die Quizfragen
const quizQuestions = [
  {
    question: "Was ist AI?",
    answers: [
      { text: "Artificial Intelligence", isCorrect: true },
      { text: "Artificial Insemination", isCorrect: false },
      { text: "Artificial Ingredients", isCorrect: false },
      { text: "Artisanal Icecream", isCorrect: false }
    ]
  },
  {
    question: "Was ist ein Vorteil von Cloud Computing?",
    answers: [
      { text: "Erhöhte Sicherheitsrisiken", isCorrect: false },
      { text: "Unbegrenzte Speicherkapazität", isCorrect: false },
      { text: "Flexibilität und Skalierbarkeit", isCorrect: true },
      { text: "Feste Kosten", isCorrect: false }
    ]
  }
  // Fügen Sie weitere Fragen hier hinzu
];

function QuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Du hast {score} von {quizQuestions.length} Punkten erreicht!
          <button onClick={toggleAnswers}>Antworten {showAnswers ? "verbergen" : "anzeigen"}</button>
          {showAnswers && (
            <div>
              {quizQuestions.map((question, index) => (
                <div key={index}>
                  <p>{question.question}</p>
                  <ul>
                    {question.answers.map((answer, answerIndex) => (
                      <li key={answerIndex} style={{color: answer.isCorrect ? "green" : "red"}}>
                        {answer.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Frage {currentQuestion + 1}</span>/{quizQuestions.length}
          </div>
          <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].answers.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizTest;
