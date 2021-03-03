import React from 'react';
import { Helmet as HelmetAsync  } from 'react-helmet-async';

interface HelmetProps {
  title: string;
}

const Helmet: React.FC<HelmetProps> = ({ title }) => {
  return (
    <HelmetAsync>
      <link rel="shortcut icon" href="https://www.youtube.com/s/desktop/bda3c6ba/img/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="https://www.youtube.com/s/desktop/bda3c6ba/img/favicon_32.png" sizes="32x32"/>
      <link rel="icon" href="https://www.youtube.com/s/desktop/bda3c6ba/img/favicon_48.png" sizes="48x48"/>
      <link rel="icon" href="https://www.youtube.com/s/desktop/bda3c6ba/img/favicon_96.png" sizes="96x96"/>
      <link rel="icon" href="https://www.youtube.com/s/desktop/bda3c6ba/img/favicon_144.png" sizes="144x144"/>
      <link rel="canonical" href="https://www.youtube.com/watch?v=VUwU9wt2s7w"/>
      <link rel="alternate" media="handheld" href="https://m.youtube.com/watch?v=VUwU9wt2s7w&amp;ab_channel=JovensdeNeg%C3%B3cios"/>
      <link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.youtube.com/watch?v=VUwU9wt2s7w&amp;ab_channel=JovensdeNeg%C3%B3cios"/>

      <title>{title}</title>
      <meta name="description" content="Description do canal que vai longeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ..."/>
      <meta name="keywords" content="asdasdasdadasdcomo escolher um fundo imobiliário, qual fundo imobiliário investir, como escolher um fii, como analisar um fundo imobiliario, como avaliar um fundo imobiliário, fundo imobiliário, como escolher seu fundo imobiliário, fundos imobiliários, melhores fundos imobiliários, como escolher o melhor fundo imobiliário, fii, fiis, fii's, como escolher o melhor fii, como escolher um fiis, escolher fii, qual é o melhor fundo imobiliário, melhor fundo imobiliário da bolsa de valores, melhor fii"/>

      <link rel="image_src" href="https://i.ytimg.com/vi/VUwU9wt2s7w/maxresdefault.jpg"/>

      {/* <meta property="og:type" content="video.other"/> */}
      <meta property="og:site_name" content="Canal"/>
      <meta property="og:url" content="https://www.youtube.com/watch?v=VUwU9wt2s7w"/>
      <meta property="og:title" content="TITULO NOVO PARA EXEMPLO"/>
      <meta property="og:image" content="https://i.ytimg.com/vi/VUwU9wt2s7w/maxresdefault.jpg"/>
      <meta property="og:image:width" content="1280"/>
      <meta property="og:image:height" content="720"/>
      <meta property="og:description" content="Description do canal que vai longeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ..."/>
      {/* <meta property="og:video:url" content="https://www.youtube.com/embed/VUwU9wt2s7w"/>
      <meta property="og:video:secure_url" content="https://www.youtube.com/embed/VUwU9wt2s7w"/>
      <meta property="og:video:type" content="text/html"/>
      <meta property="og:video:width" content="1280"/>
      <meta property="og:video:height" content="720"/>
      <meta property="og:video:tag" content="como escolher um fundo imobiliário"/>       */}
      {/* <meta property="fb:app_id" content="87741124305"/> */}

      <meta name="twitter:card" content="player"/>
      <meta name="twitter:site" content="@youtube"/>
      <meta name="twitter:url" content="https://www.youtube.com/watch?v=VUwU9wt2s7w"/>
      <meta name="twitter:title" content="Como escolher o MELHOR FUNDO IMOBILIÁRIO (FII) da BOLSA DE VALORES"/>
      <meta name="twitter:description" content="Vou te mostrar COMO ESCOLHER um fundo imobiliário (fii) para você saber com confiança em qual fundo imobiliário investir. Você vai aprender as métricas mais ..."/>
      <meta name="twitter:image" content="https://i.ytimg.com/vi/VUwU9wt2s7w/maxresdefault.jpg"/>
      <meta name="twitter:app:name:iphone" content="YouTube"/>
      {/* <meta name="twitter:app:id:iphone" content="544007664"/> */}
      <meta name="twitter:app:name:ipad" content="YouTube"/>
      {/* <meta name="twitter:app:id:ipad" content="544007664"/> */}
      <meta name="twitter:app:url:iphone" content="vnd.youtube://www.youtube.com/watch?v=VUwU9wt2s7w&amp;ab_channel=JovensdeNeg%C3%B3cios&amp;feature=applinks"/>
      <meta name="twitter:app:url:ipad" content="vnd.youtube://www.youtube.com/watch?v=VUwU9wt2s7w&amp;ab_channel=JovensdeNeg%C3%B3cios&amp;feature=applinks"/>
      <meta name="twitter:app:name:googleplay" content="YouTube"/>
      <meta name="twitter:app:id:googleplay" content="com.google.android.youtube"/>
      <meta name="twitter:app:url:googleplay" content="https://www.youtube.com/watch?v=VUwU9wt2s7w"/>
      <meta name="twitter:player" content="https://www.youtube.com/embed/VUwU9wt2s7w"/>
      <meta name="twitter:player:width" content="1280"/>
      <meta name="twitter:player:height" content="720"/>
    </HelmetAsync>
  );
}

export default Helmet;