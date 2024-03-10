import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import QuizTest from './pages/QuizTest';
import HomePage from './pages/HomePage-old'; // Stellen Sie sicher, dass der Pfad korrekt ist

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz-test" element={<QuizTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
