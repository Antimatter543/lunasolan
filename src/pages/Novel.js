import React, { useState, useEffect } from 'react';
import Chapter from '../components/Chapter';
import LeafAnimation from '../components/LeafAnimation';

// Dynamically import all markdown files in the chapters directory
const context = require.context('../content/chapters', false, /\.md$/);

const Novel = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [content, setContent] = useState('');
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    // Get all chapter filenames
    const chapters = context.keys().map((key) => key.replace('./', ''));
    setChapters(chapters);
  }, []);

  useEffect(() => {
    if (chapters.length > 0) {
      import(`../content/chapters/${chapters[currentChapterIndex]}`)
        .then((module) => fetch(module.default))
        .then((response) => response.text())
        .then((text) => setContent(text));
    }
  }, [currentChapterIndex, chapters]);

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  const nextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  return (
    <div className="novel-page bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <LeafAnimation />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Novel: Lunasolan</h1>
        <div className="flex justify-between mb-6">
          {currentChapterIndex > 0 && (
            <button onClick={prevChapter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Previous Chapter
            </button>
          )}
          {currentChapterIndex < chapters.length - 1 && (
            <button onClick={nextChapter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">
              Next Chapter
            </button>
          )}
        </div>
        <div className="chapter-content bg-white shadow-lg rounded-lg p-8">
          <Chapter content={content} />
        </div>
      </div>
    </div>
  );
};

export default Novel;
