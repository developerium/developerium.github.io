import React from 'react'

import { InfoCard } from './components/InfoCard'
import myImage from './assets/me-01.jpg'

import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <InfoCard
        title={'Vahid Kheradmand'}
        description={
          "I'm a happy/quite/dad engineer living in beautiful Munich Germany."
        }
        image={myImage}
      />
    </Layout>
  )
}

export default App
