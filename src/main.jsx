import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot directly
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
