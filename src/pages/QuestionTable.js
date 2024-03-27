// QuestionTable component
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddQuestionPopup from './AddQuestionPopup';
import EditQuestionPopup from './EditQuestionPopup';

const QuestionTable = ({ setQuestions }) => {
  const [questions, setQuestionsLocal] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditIndex(null);
  };

  const handleAddQuestion = (newQuestion) => {
    setQuestionsLocal([...questions, newQuestion]);
    closeAddModal(); // Close the modal after adding the question
  };

  const handleEditQuestion = (editedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[editIndex] = editedQuestion;
    setQuestionsLocal(updatedQuestions);
    closeEditModal(); // Close the modal after editing the question
  };

  const deleteQuestion = (index) => {
    const filteredQuestions = questions.filter((_, i) => i !== index);
    setQuestionsLocal(filteredQuestions);
  };

  return (
    <div>
      <Button variant="primary" onClick={openAddModal}>Add New Question</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Question</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions && questions.length > 0 &&
            questions.map((question, index) => (
              <tr key={index}>
                <td>{question.text}</td>
                <td>
                  <Button variant="info" onClick={() => openEditModal(index)}>Edit</Button>{' '}
                  <Button variant="danger" onClick={() => deleteQuestion(index)}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {showAddModal && <AddQuestionPopup handleAddQuestion={handleAddQuestion} handleClose={closeAddModal} />}
      {showEditModal && <EditQuestionPopup question={questions[editIndex]} handleEdit={handleEditQuestion} handleClose={closeEditModal} />}
    </div>
  );
};

export default QuestionTable;
