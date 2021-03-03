import React from 'react';
import { Helmet } from 'react-helmet-async';

const Canal: React.FC = () => {
  return (
    <>
      <h1>Canal</h1>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </>
  );
}

export default Canal;