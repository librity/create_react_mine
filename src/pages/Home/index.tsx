import Head from 'next/head'

import styles from './Home.module.css'

import { BlockchainProvider } from '../../contexts/BlockchainContext'

import { NextBlock } from '../../components/NextBlock'
import { MinedBlocks } from '../../components/MinedBlocks'
import { Footer } from '../../components/Footer'

const Home = () => {
  return (
    <BlockchainProvider>
      <div className={styles.container}>
        <Head>
          <title>Create React Mine</title>
        </Head>

        {/* <NextBlock /> */}

        <MinedBlocks />

        <Footer />
      </div>
    </BlockchainProvider>
  )
}

export default Home
