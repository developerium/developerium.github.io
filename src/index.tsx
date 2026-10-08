import React from 'react'
import TagManager from 'react-gtm-module'
import { ViteReactSSG } from 'vite-react-ssg/single-page'

import packageInfo from '../package.json'
import App from './App'
import reportWebVitals from './reportWebVitals'

export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ({ isClient }) => {
    if (!isClient) {
      return
    }

    if (import.meta.env.PROD) {
      console.log(`app version: ${packageInfo.version}`)
      TagManager.initialize({ gtmId: 'G-P8F2F68Z2Z' })
    }

    reportWebVitals()
  }
)
