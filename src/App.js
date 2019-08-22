import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Utility/Layout';

const GlobalStyling = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyling />
      <Layout />
    </div>
  );
}

export default App;
