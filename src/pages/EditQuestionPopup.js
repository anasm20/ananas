// EditQuestionPopup.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditQuestionPopup = ({ question, handleEdit, handleClose }) => {
  const [editedQuestion, setEditedQuestion] = useState(question);

  const handleSave = () => {
    handleEdit(editedQuestion);
    handleClose();
  };

  const handleOptionChange = (index, text) => {
    const updatedOptions = [...editedQuestion.options];
    updatedOptions[index].text = text;
    setEditedQuestion({ ...editedQuestion, options: updatedOptions });
  };

  const handleCorrectOptionChange = (index) => {
    const updatedOptions = [...editedQuestion.options];
    updatedOptions.forEach((option, i) => {
      updatedOptions[i].correct = i === index;
    });
    setEditedQuestion({ ...editedQuestion, options: updatedOptions });
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Frage bearbeiten</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="editQuestionText">
          <Form.Label>Frage</Form.Label>
          <Form.Control
            type="text"
            value={editedQuestion.text}
            onChange={(e) => setEditedQuestion({ ...editedQuestion, text: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="editOptions">
          <Form.Label>Antworten</Form.Label>
          {editedQuestion.options.map((option, index) => (
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
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Abbrechen</Button>
        <Button variant="primary" onClick={handleSave}>Speichern</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditQuestionPopup;
