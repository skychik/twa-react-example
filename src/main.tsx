import { SDKProvider } from '@twa.js/sdk-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Loader } from './Loader'
import { TwaFrame } from './TwaFrame'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SDKProvider>
      <Loader>
        <TwaFrame>
          <App />
        </TwaFrame>
      </Loader>
    </SDKProvider>
  </React.StrictMode>,
)
