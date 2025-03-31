import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Vending_Machine'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
