import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadDevTools } from "jira-dev-tool";
import { AppProvider } from './context';

loadDevTools(() => {
  ReactDOM.render(
    <AppProvider>
      <App />
    </AppProvider>,
    document.getElementById('root')
  )
})
