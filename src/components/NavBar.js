import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      className="bg-gray-900 p-4 relative overflow-hidden"
    >
      <div className="stars absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <ul className="flex justify-center items-center space-x-8 relative z-10">
        <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
        <NavItem to="/novel" currentPath={location.pathname}>Novel</NavItem>
        <Moon className="text-yellow-300 h-6 w-6" />
        <NavItem to="/bestiary" currentPath={location.pathname}>Bestiary</NavItem>
        <NavItem to="/map" currentPath={location.pathname}>Map</NavItem>
      </ul>
    </motion.nav>
  );
};

const NavItem = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;

  return (
    <li>
      <Link
        to={to}
        className={`text-lg font-medium transition-all duration-300 flex items-center ${
          isActive 
            ? 'text-yellow-300 glow' 
            : 'text-gray-300 hover:text-yellow-200 hover:glow'
        }`}
      >
        <Star className={`mr-1 h-4 w-4 ${isActive ? 'text-yellow-300' : 'text-gray-500'}`} />
        {children}
      </Link>
    </li>
  );
};

export default NavBar;