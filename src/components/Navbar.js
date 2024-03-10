import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo.png'; // Stellen Sie sicher, dass dieser Pfad zu Ihrem Logo passt

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50" // Passen Sie die Breite nach Ihren Bedürfnissen an
            height="60" // Passen Sie die Höhe nach Ihren Bedürfnissen an
            className="d-inline-block align-top" // Dies hilft, das Logo vertikal mit dem Text auszurichten, falls Sie neben dem Logo auch Text haben möchten
            alt="Ananas Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/quiz-test">Quiz Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
