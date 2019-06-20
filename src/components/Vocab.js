import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Word from './vocab/Word';

const Vocab = ({ data }) => {
  const adjectiveQuery = graphql`
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
    }
  `;

  const verbQuery = graphql`
    query {
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
    }
  `;

  const adjectiveQueryResponse = useStaticQuery(adjectiveQuery);
  // const verbQueryResponse = useStaticQuery(verbQuery);

  console.log(adjectiveQueryResponse);
  // console.log(verbQueryResponse);

  return (
    <div>
      <h1>Let's Get Wordy</h1>
      <div>
        <h2>Adjectives</h2>
        {/* {adjectiveQueryResponse.adjectiveQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))} */}
      </div>
    </div>
  );
};

export default Vocab;
