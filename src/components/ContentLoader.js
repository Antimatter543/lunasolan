// src/components/ContentLoader.js
import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const ContentLoader = ({ fileName }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../content/${fileName}`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [fileName]);

  return <MarkdownRenderer content={content} />;
};

export default ContentLoader;
