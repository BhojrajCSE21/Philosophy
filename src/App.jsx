import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Philosophy from './components/Philosophy';
import Readmore from './components/Readmore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Philosophy />} />
        <Route path="/readmore" element={<Readmore />} />
      </Routes>
    </Router>
  );
}

export default App;
