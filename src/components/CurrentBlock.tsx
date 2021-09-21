import { useContext } from 'react'

import styles from '../styles/components/CurrentBlock.module.css'

import { BlockchainContext } from '../contexts/BlockchainContext'

export const CurrentBlock = () => {
  const { chain } = useContext(BlockchainContext)

  return (
    <section className={styles.container}>
      <h1>{chain.unminedBlock}</h1>
    </section>
  )
}
