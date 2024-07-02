
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
      <Router basename='/lunasolan'>
        <div className="app min-h-screen bg-gray-800 text-white">
          <NavBar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/novel" element={<Novel />} />
                <Route path="/bestiary" element={<Bestiary />} />
                <Route path="/map" element={<Map />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;
