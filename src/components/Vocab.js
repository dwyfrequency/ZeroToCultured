import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Word from './vocab/Word';

const Vocab = ({ data }) => {
  const query = graphql`
    query {
      adjectiveQuery: allVocabWordsJson(filter: { type: { eq: "adj." } }) {
        edges {
          node {
            id
            word
            definition
            type
          }
        }
      }
      verbQuery: allVocabWordsJson(filter: { type: { eq: "v." } }) {
        edges {
          node {
            id
            word
            definition
            type
          }
        }
      }
      nounQuery: allVocabWordsJson(filter: { type: { eq: "n." } }) {
        edges {
          node {
            id
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
  const { adjectiveQuery, nounQuery, verbQuery } = response;
  return (
    <div>
      <h1>Let's Get Wordy</h1>
      <div>
        <h2>Adjectives</h2>
        {adjectiveQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
        <h2>Verbs</h2>
        {verbQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
        <h2>Nouns</h2>
        {nounQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
      </div>
    </div>
  );
};

export default Vocab;
