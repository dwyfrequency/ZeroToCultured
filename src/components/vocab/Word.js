import React from 'react';

const Word = ({ word: name, definition, type }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{definition}</p>
      <p>{type}</p>
    </div>
  );
};

export default Word;
