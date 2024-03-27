import React, { useState, useEffect } from 'react';
import { Accordion, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { saveData, loadData } from '../components/localStorageService';

function Information() {
  const [activeKey, setActiveKey] = useState('0');
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({ header: '', body: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [password, setPassword] = useState(''); // Passwortfeld für Löschbestätigung
  const navigate = useNavigate();

  useEffect(() => {
    const savedItems = loadData('homePageItems');
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const startQuiz = () => {
    navigate('/quiz-test');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewItem({ header: '', body: '' });
    setEditIndex(null);
  };

  const handleSaveNewItem = () => {
    let updatedItems;
    if (editIndex !== null) {
      updatedItems = [...items];
      updatedItems[editIndex] = newItem;
    } else {
      updatedItems = [...items, newItem];
    }
    setItems(updatedItems);
    saveData('homePageItems', updatedItems);
    handleCloseModal();
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setNewItem(items[index]);
    setShowModal(true);
  };

  const handleDeleteConfirmation = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const handleDeleteItem = () => {
    if (password === '!Ananas!') {
      const updatedItems = items.filter((_, i) => i !== deleteIndex);
      setItems(updatedItems);
      saveData('homePageItems', updatedItems);
    }
    // Reset states after deletion attempt
    setDeleteIndex(null);
    setPassword('');
    setShowDeleteModal(false);
  };

  return (
    <div className="home-container">
      <h1>Willkommen zu Ananas-Lernportal über AI und Cloud Computing</h1>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        {items.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{index + 1}. {item.header}</Accordion.Header>
            <Accordion.Body>
              {item.body}
              <div className="edit-delete-buttons">
                <Button variant="info" onClick={() => handleEditItem(index)} className="m-1">Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteConfirmation(index)} className="m-1">Delete</Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button onClick={() => setShowModal(true)} className="mt-3">Neues Info hinzufügen</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Item bearbeiten" : "Neues Item hinzufügen"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newItemHeader">
              <Form.Label>Information</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Information eingeben" 
                value={newItem.header} 
                onChange={(e) => setNewItem({ ...newItem, header: e.target.value })} 
              />
            </Form.Group>
            <Form.Group controlId="newItemBody">
              <Form.Label>Erklärung</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Erklärung eingeben" 
                value={newItem.body} 
                onChange={(e) => setNewItem({ ...newItem, body: e.target.value })} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Abbrechen</Button>
          <Button variant="primary" onClick={handleSaveNewItem}>Speichern</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Löschbestätigung</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Möchten Sie dieses Element wirklich löschen?
          <Form.Group controlId="deleteConfirmation">
            <Form.Label>Passwort</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Passwort eingeben" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Abbrechen</Button>
          <Button variant="danger" onClick={handleDeleteItem}>Löschen</Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={startQuiz} className="mt-3">Quiz Test Anfangen</Button>
    </div>
  );
}

export default Information;
