
// src/App.js
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Novel from './pages/Novel';
import Bestiary from './pages/Bestiary';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/bestiary" element={<Bestiary />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
