import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { reducer, initialState } from './Utility/reducer.JS'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
