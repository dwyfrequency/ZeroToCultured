import React from 'react';
import Layout from '../components/Layout';
import Vocab from '../components/Vocab';

export default () => {
  return (
    <Layout>
      <div>
        All words
        <Vocab />
      </div>
    </Layout>
  );
};
