import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return(
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed|Source+Serif+Pro&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet"></link>
    </Helmet>
  );
}

export default Head;