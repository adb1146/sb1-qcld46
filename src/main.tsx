import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext';
import { TutorialProvider } from './components/TutorialContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <TutorialProvider>
      <App />
      </TutorialProvider>
    </AuthProvider>
  </StrictMode>
);
