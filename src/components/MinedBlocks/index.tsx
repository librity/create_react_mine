import React, { useContext } from 'react'
import Block from '../../classes/Block'

import styles from './index.module.css'

import { BlockchainContext } from '../../contexts/BlockchainContext'
import { MinedBlock } from './MinedBlock'

export const MinedBlocks = () => {
  const { chain } = useContext(BlockchainContext)

  return (
    <section className={styles.container}>
      {chain.getBlocks().map((block: Block) => (
        <MinedBlock block={block} />
      ))}
    </section>
  )
}
