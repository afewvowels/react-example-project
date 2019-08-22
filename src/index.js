import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';

const theme = {
  primary: "#1675d1",
  primaryLight: "#62a3ff",
  primaryDark: "#004a9f",

  secondary: "#009688",
  secondaryLight: "#52c7b8",
  secondaryDark: "#00675b",

  fontLight: "#fbfbfb",
  fontDark: "#080808",

  fontBody: "'DM Sans', sans-serif",
  fontDisplay: "'Lexend Deca', sans-serif",

  lineHeight: "1.5rem",

  p: "1rem",
  h6: "1rem",
  h5: "1.5rem",
  h4: "2.0rem",
  h3: "2.5rem",
  h2: "3.0rem",
  h1: "3.5rem"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
