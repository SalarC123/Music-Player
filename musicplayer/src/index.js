import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './components/App';
import { AllSongsProvider } from './components/AllSongsContext';
import {PlaylistCollectionProvider} from './components/PlaylistCollectionContext'

ReactDOM.render(
  <React.StrictMode>
    <PlaylistCollectionProvider>
      <AllSongsProvider>
        <App />
      </AllSongsProvider>
    </PlaylistCollectionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
