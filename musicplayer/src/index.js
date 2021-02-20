import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './components/App';
import { AllSongsProvider } from './components/AllSongsContext';

ReactDOM.render(
  <React.StrictMode>
    <AllSongsProvider>
      <App />
    </AllSongsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
