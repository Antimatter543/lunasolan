// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => (
  <motion.nav
    initial={{ y: -250 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
  >
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/novel">Novel</Link></li>
      <li><Link to="/bestiary">Bestiary</Link></li>
      <li><Link to="/map">Map</Link></li>
    </ul>
  </motion.nav>
);

export default NavBar;
