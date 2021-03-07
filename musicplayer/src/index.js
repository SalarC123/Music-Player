import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './components/App';
import { AllSongsProvider } from './components/AllSongsContext';
import {PlaylistCollectionProvider} from './components/PlaylistCollectionContext'
import { VisibilityProvider } from './components/VisibilityContext'

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <PlaylistCollectionProvider>
        <AllSongsProvider>
          <App />
        </AllSongsProvider>
      </PlaylistCollectionProvider>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
