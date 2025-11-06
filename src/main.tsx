import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './app/store';

const initializeTheme = () => {
  if (typeof window === 'undefined') return;
  const stored = window.localStorage.getItem('iamkay-theme');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const mode = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(mode);
};

initializeTheme();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
