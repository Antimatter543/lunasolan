// src/components/Chapter.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSpring, animated } from 'react-spring';

const Chapter = ({ content }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="chapter prose prose-sm sm:prose lg:prose-lg mx-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </animated.div>
  );
};

export default Chapter;