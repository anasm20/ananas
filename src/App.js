import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';
import QuizTest from './pages/QuizTest';
import HomePage from './pages/HomePage';
// import QuestionTable from './pages/QuestionTable';
import Information from './pages/Information';
import Leaderboard from './pages/Leaderboard';
import FlippCard from './pages/FlippCard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/flipp-card" element={<FlippCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/quiz-test" element={<QuizTest />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
