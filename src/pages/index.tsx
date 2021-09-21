import { GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import { ExperienceBar } from '../components/ExperienceBar'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section></section>
      <section></section>
    </div>
  )
}

export default Home
