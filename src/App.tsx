import React from 'react'
import { ThemeProvider } from '@mui/material'

import { InfoCard } from './components/InfoCard'
import myImage from './assets/me-01.jpg'
import { Layout } from './components/Layout'
import { appTheme, pinkColor, purpleColor } from './config/theme-config'
import { SocialLinkList } from './components/SocialLinkList'
import { SurpriseButtonList } from './components/SurpriseButtonList'
import { CommunityLinkList } from './components/CommunityLinkList'

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

        <InfoCard
          title="IT Engineers' Road to Germany"
          description="🌍 Looking to land an IT job in Germany? Join our community for expert guidance on resumes, job searches, and interview prep—all designed to help you succeed in the German job market! Let’s get you closer to your career in Germany! 🚀"
          bgColor={purpleColor}
        />

        <CommunityLinkList />
      </Layout>
    </ThemeProvider>
  )
}

export default App
