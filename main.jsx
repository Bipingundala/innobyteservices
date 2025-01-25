
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root')); // Create a root for rendering

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
