import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App2 } from './componentes/App2.jsx'
import App from './componentes/App.jsx'
import { App3 } from './componentes/App3.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <App />
      <App2 />
      <App2 />
      <App3 />
    </>
)
