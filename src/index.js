import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
;



ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

