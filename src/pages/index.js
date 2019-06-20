import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
// const APOLLO_QUERY = gql`
//   {
//     dog(breed: "frise") {
//       breed
//       displayImage
//     }
//   }
// `;

const APOLLO_QUERY = gql`
  {
    popular_artists {
      artists {
        id
        name
      }
    }
  }
`;

// destructing prop.data.rickAndMorty.character
// Why dont we have to wrap this in a apollogprovider? Take a look at the browser
// file https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
export default ({
  data: {
    rickAndMorty: { character },
  },
}) => (
  <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
    <h1>{character.name} With His Pupper</h1>
    <p>
      Rick & Morty API data loads at build time. Dog API data loads at run time.
    </p>
    <div>
      <img src={character.image} alt={character.name} style={{ width: 300 }} />

      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading pupper...</p>;
          if (error) return <p>Error: ${error.message}</p>;
          console.log(data);
          const {
            popular_artists: { artists },
          } = data;
          return (
            <>
              <h1>data fetched</h1>
              <ul>
                {artists.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </>
          );
          // const { displayImage: src, breed } = data.dog;
          // return <img src={src} alt={breed} style={{ maxWidth: 300 }} />;
        }}
      </Query>
    </div>
  </div>
);
