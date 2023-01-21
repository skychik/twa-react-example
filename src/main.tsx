import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { TwaInitializer } from './twa'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TwaInitializer>
      <App />
    </TwaInitializer>
  </React.StrictMode>,
)
