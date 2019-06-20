import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Word from './vocab/Word';

const Vocab = ({ data }) => {
  const query = graphql`
    query {
      allVocabWordsJson {
        edges {
          node {
            word
            definition
            type
          }
        }
      }
    }
  `;
  const response = useStaticQuery(query);
  console.log(response);
  return (
    <div>
      <h1>Let's Get Wordy</h1>
      <ul>words will live here</ul>
    </div>
  );
};

export default Vocab;
