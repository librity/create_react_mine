import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import { CurrentBlock } from '../components/CurrentBlock'
import { Blockchain } from '../components/Blockchain'
import { useEffect } from 'react'
import blockchainDemo from '../blockchainDemo'

const Home = () => {
  useEffect(() => {
    blockchainDemo()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <section>
        <CurrentBlock />
      </section>

      <section>
        <Blockchain />
      </section>
    </div>
  )
}

export default Home
