import Head from 'next/head'

import { BlockchainProvider } from '../contexts/BlockchainContext'

import { ControlPanel } from '../components/ControlPanel'
import { MinedBlocks } from '../components/MinedBlocks'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <BlockchainProvider>
      <div>
        <Head>
          <title>Create React Mine</title>
        </Head>

        <ControlPanel />

        <MinedBlocks />

        <Footer />
      </div>
    </BlockchainProvider>
  )
}

export default Home
