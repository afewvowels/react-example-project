import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './Utility/Layout';

const GlobalStyling = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p {
    cursor: default;
  }
`;

const customHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router histor={customHistory}>
        <GlobalStyling />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
