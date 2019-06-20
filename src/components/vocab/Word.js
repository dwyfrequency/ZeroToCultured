import React from 'react';

const Word = ({ word: name, definition, type }) => {
  return (
    <div>
      <p>
        <strong>{name}</strong>: {definition} <em>({type})</em>
      </p>
      <p></p>
    </div>
  );
};

export default Word;
