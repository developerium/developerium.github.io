import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import packageInfo from '../package.json'

const { version } = packageInfo

import TagManager from 'react-gtm-module'

if (process.env.NODE_ENV === 'production') {
  console.log(`app version: ${version}`)
  TagManager.initialize({ gtmId: 'G-P8F2F68Z2Z' })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
