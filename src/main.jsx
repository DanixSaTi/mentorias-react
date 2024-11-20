import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EjemploRef } from './components/ejemploRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EjemploRef />
  </StrictMode>,
)
