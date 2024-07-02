// src/components/LeafAnimation.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const LeafAnimation = () => {
  const props = useSpring({
    to: { transform: 'translateY(100vh)' },
    from: { transform: 'translateY(-10vh)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  });

  return <animated.div style={props} className="leaf"></animated.div>;
};

export default LeafAnimation;
