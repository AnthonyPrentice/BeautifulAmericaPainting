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
    </MetaTags>
    <App />
  </React.StrictMode>
);
