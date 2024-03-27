import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function QuizAdmin({ onSaveQuestion }) {
  const [newQuestion, setNewQuestion] = useState({ text: '', options: [] });
  const [newOption, setNewOption] = useState('');

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = { id: index, text: value };
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const addOption = () => {
    if (newOption.trim() !== '') {
      const updatedOptions = [...newQuestion.options, { id: newQuestion.options.length, text: newOption }];
      setNewQuestion({ ...newQuestion, options: updatedOptions });
      setNewOption('');
    }
  };

  const handleSave = () => {
    onSaveQuestion(newQuestion);
    setNewQuestion({ text: '', options: [] }); // Setzt die Frage zurück nach dem Speichern
    setNewOption(''); // Setzt die neue Option zurück nach dem Hinzufügen
  };

  return (
    <div>
      <h2>Quiz-Admin</h2>
      <Form.Group>
        <Form.Label>Frage:</Form.Label>
        <Form.Control
          type="text"
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Antworten:</Form.Label>
        {newQuestion.options.map((option, index) => (
          <div key={index}>
            <Form.Control
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          </div>
        ))}
        <div>
          <Form.Control
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
          />
          <Button onClick={addOption}>Option hinzufügen</Button>
        </div>
      </Form.Group>
      <Button onClick={handleSave}>Frage speichern</Button>
    </div>
  );
}

export default QuizAdmin;
