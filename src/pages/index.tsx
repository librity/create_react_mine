import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import { BlockchainProvider } from '../contexts/BlockchainContext'

import { CurrentBlock } from '../components/CurrentBlock'
import { BlockchainStatus } from '../components/BlockchainStatus'

const Home = () => {
  return (
    <BlockchainProvider>
      <div className={styles.container}>
        <Head>
          <title>Create React Mine</title>
        </Head>

          <CurrentBlock />

          <BlockchainStatus />
      </div>
    </BlockchainProvider>
  )
}

export default Home
