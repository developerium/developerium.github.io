import React from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'

import packageInfo from '../package.json'
import App from './App'
import reportWebVitals from './reportWebVitals'

if (import.meta.env.PROD) {
  console.log(`app version: ${packageInfo.version}`)
  TagManager.initialize({ gtmId: 'G-P8F2F68Z2Z' })
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
