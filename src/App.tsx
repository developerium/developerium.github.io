import React from 'react'

import { InfoCard } from './components/InfoCard'
import myImage from './assets/me-01.jpg'

import { Layout } from './components/Layout'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './config/theme-config'
import { SocialLinks } from './components/SocialLinks'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <InfoCard
          title={'Vahid Kheradmand'}
          description={
            "I'm a happy/quite/dad engineer living in beautiful Munich Germany."
          }
          image={myImage}
        />

        <SocialLinks />
      </Layout>
    </ThemeProvider>
  )
}

export default App
