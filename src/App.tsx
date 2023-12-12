import React from 'react'

import { ThemeProvider } from '@mui/material'
import { InfoCard } from './components/InfoCard'
import myImage from './assets/me-01.jpg'
import { Layout } from './components/Layout'
import { appTheme } from './config/theme-config'
import { SocialLinks } from './components/SocialLinks'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <InfoCard
          title="Vahid Kheradmand"
          description="Seasoned cloud software engineer on the entrepreneurial path, enjoying life in Munich."
          image={myImage}
        />

        <SocialLinks />
      </Layout>
    </ThemeProvider>
  )
}

export default App
