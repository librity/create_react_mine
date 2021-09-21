import { useContext } from 'react'
import Block from '../classes/Block'

import styles from '../styles/components/BlockchainStatus.module.css'

import { BlockchainContext } from '../contexts/BlockchainContext'

export const BlockchainStatus = () => {
  const { chain } = useContext(BlockchainContext)

  return (
    <section className={styles.container}>
      {chain.getBlocks().map((block: Block) => (
        <div>
          <span>{block.data}</span>
          <span>{block.hash}</span>
        </div>
      ))}
    </section>
  )
}
