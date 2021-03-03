import React from 'react';
import { Helmet } from 'react-helmet-async';

const Canal: React.FC = () => {
  return (
    <>
      <h1>Canal</h1>
      <Helmet>
        <title>Canal</title>
        <meta property="og:site_name" content="Canal" />
        <meta property="og:url" content="https://www.youtube.com/watch?v=VUwU9wt2s7w" />
        <meta property="og:title" content="TITULO NOVO PARA EXEMPLO" />
        <meta property="og:image" content="https://i.ytimg.com/vi/VUwU9wt2s7w/maxresdefault.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:description" content="Description do canal que vai longeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ..." />
      </Helmet>
    </>
  );
}

export default Canal;