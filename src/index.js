import React from 'react';
import ReactDOM from 'react-dom/client';
import MetaTags from 'react-meta-tags';
import App from './App';
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MetaTags>
    {/*<meta name="viewport" content="width=1052" />*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
    </MetaTags>
    <App />
  </React.StrictMode>
);
