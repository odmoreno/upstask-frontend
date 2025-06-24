import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola mundo</h1>
  </StrictMode>,
)
