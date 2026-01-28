import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router";
import './index.css'
import App from './App.jsx'
import ProfileProvider from './Provider/ProfileProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </Router>
  </StrictMode>,
)
