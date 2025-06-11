import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename='/portfolio'>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);