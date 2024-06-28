import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as R from "@/redux/store.ts";
import App from './App'
import './global.css'
import { LanguageProvider } from '@/hooks/Language';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={R.store}>
      <PersistGate loading={null} persistor={R.persistor}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
