// src/pages/Bestiary.js
import React from 'react';
import ContentLoader from '../components/ContentLoader';

const bestiaryEntries = [
  'bestiary/creature1.md',
  'bestiary/creature2.md',
  // Add more entries here
];

const Bestiary = () => (
  <div>
    <h1>Bestiary</h1>
    {bestiaryEntries.map((entry, index) => (
      <ContentLoader key={index} fileName={entry} />
    ))}
  </div>
);

export default Bestiary;
