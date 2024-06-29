import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import 'jsvectormap/dist/jsvectormap.css';
// import 'flatpickr/dist/flatpickr.min.css';
import { LanguageProvider } from "@/hooks/Language.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
