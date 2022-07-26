import React from 'react';
import ReactDOM from 'react-dom/client';

import { PathProvider } from './Context/PathContext';
import AppRoutes from './Routes/AppRoutes';

// Normalize
import './Styles/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PathProvider>
      <AppRoutes />
    </PathProvider>
  </React.StrictMode>
);