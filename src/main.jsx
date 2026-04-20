import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ciscodesignsystems/cds-magnetic-one-cd-theme-web/css/dist/token-theme-variables.css'
import '@ciscodesignsystems/cds-magnetic-one-cd-theme-web/css/dist/token-theme-variables-experimental.css'
import '@ciscodesignsystems/cds-magnetic-one-cd-theme-web/css/dist/token-theme-utils.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
