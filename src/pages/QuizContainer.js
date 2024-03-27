import React, { useState, useEffect } from 'react';
import QuizAdmin from './QuizAdmin'; 
function QuizContainer() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  const saveQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return (
    <div>
      <QuizAdmin onSaveQuestion={saveQuestion} />
      {/* Optional: Gespeicherte Fragen anzeigen */}
    </div>
  );
}

export default QuizContainer;
