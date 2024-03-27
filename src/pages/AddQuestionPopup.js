// AddQuestionPopup.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddQuestionPopup = ({ handleAddQuestion, handleClose }) => {
  const [newQuestion, setNewQuestion] = useState({ text: '', options: [{ id: 1, text: '', correct: false }] });

  const handleSave = () => {
    handleAddQuestion(newQuestion);
    handleClose();
  };

  const addOption = () => {
    const newOptions = [...newQuestion.options, { id: Date.now(), text: '', correct: false }];
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const handleOptionChange = (index, text) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index].text = text;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleCorrectOptionChange = (index) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions.forEach((option, i) => {
      updatedOptions[i].correct = i === index;
    });
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Neue Frage hinzufügen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="addQuestionText">
          <Form.Label>Frage</Form.Label>
          <Form.Control
            type="text"
            value={newQuestion.text}
            onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="addOptions">
          <Form.Label>Antworten</Form.Label>
          {newQuestion.options.map((option, index) => (
            <div key={option.id}>
              <Form.Control
                type="text"
                value={option.text}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="Richtig"
                checked={option.correct}
                onChange={() => handleCorrectOptionChange(index)}
              />
            </div>
          ))}
          <Button onClick={addOption}>Option hinzufügen</Button>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Abbrechen</Button>
        <Button variant="primary" onClick={handleSave}>Speichern</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuestionPopup;
