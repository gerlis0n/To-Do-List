import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './App';
import { App } from './components/Header/index';
import { GlobalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Main />
    <GlobalStyle />
  </React.StrictMode>,
)
