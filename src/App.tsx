import React from 'react'
import { ThemeProvider } from '@mui/material'

import { InfoCard } from './components/InfoCard'
import myImage from './assets/me-01.jpg'
import { Layout } from './components/Layout'
import { appTheme, pinkColor, purpleColor } from './config/theme-config'
import { SocialLinkList } from './components/SocialLinkList'
import { SurpriseButtonList } from './components/SurpriseButtonList'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout>
        <InfoCard
          containsHeader
          title="Vahid Kheradmand"
          description="Seasoned cloud software engineer on the entrepreneurial path, enjoying life in Munich."
          image={myImage}
          bgColor={purpleColor}
        />

        <SocialLinkList />

        <InfoCard
          title="Shall we have some fun"
          description="Click on the buttons below for a small surprise!"
          bgColor={pinkColor}
        />

        <SurpriseButtonList />
      </Layout>
    </ThemeProvider>
  )
}

export default App
