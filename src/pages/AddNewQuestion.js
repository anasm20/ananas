import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { saveData, loadData } from '../components/localStorageService'; // Stellen Sie sicher, dass dieser Pfad korrekt ist

function AddNewQuestion() {
  const [newQuestion, setNewQuestion] = useState({ text: '', options: [] });
  const history = useHistory();

  const handleAddOption = () => {
    const updatedOptions = [...newQuestion.options, { id: newQuestion.options.length, text: '' }];
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index].text = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleSaveQuestion = () => {
    const updatedQuestions = [...loadData('questions'), newQuestion];
    saveData('questions', updatedQuestions);
    history.push('/'); // Navigiere zurück zur Homepage nach dem Speichern
  };

  return (
    <div className="add-new-question-container">
      <h1>Neue Testfrage hinzufügen</h1>
      <Form>
        <Form.Group controlId="newQuestionText">
          <Form.Label>Frage</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Frage eingeben" 
            value={newQuestion.text} 
            onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })} 
          />
        </Form.Group>
        <Form.Label>Antworten</Form.Label>
        {newQuestion.options.map((option, index) => (
          <Form.Group controlId={`option-${index}`} key={index}>
            <Form.Control 
              type="text" 
              placeholder={`Antwort ${index + 1}`} 
              value={option.text} 
              onChange={(e) => handleOptionChange(index, e.target.value)} 
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleAddOption}>Weitere Option hinzufügen</Button>
        <Button variant="success" onClick={handleSaveQuestion} className="mt-3">Frage speichern</Button>
      </Form>
    </div>
  );
}

export default AddNewQuestion;
