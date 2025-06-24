import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import Router from './router';

ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
