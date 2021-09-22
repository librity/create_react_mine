import { useContext } from 'react'

import styles from './index.module.css'

import { BlockchainContext } from '../../../contexts/BlockchainContext'
import Time from '../../../utils/Time'

export const NextBlock = () => {
  const { chain } = useContext(BlockchainContext)
  const nextBlock = chain.nextBlock

  return (
    <div className={styles.container}>
      <h2>Block #{nextBlock.index}</h2>

      <div>
        <div>Data: {nextBlock.data}</div>
        <div>Hash: {nextBlock.hash}</div>
        <div>Created at: {Time.unixToHuman(nextBlock.header.timestamp)}</div>
      </div>

      <h4>HEADER</h4>

      <div>
        <div>Data Hash: {nextBlock.header.dataHash}</div>
        <div>Difficulty: {nextBlock.header.difficulty}</div>
        <div>Nonce: {nextBlock.header.nonce}</div>
        <div>Previous Hash: {nextBlock.header.previousHash}</div>
        <div>Timestamp: {nextBlock.header.timestamp}</div>
      </div>
    </div>
  )
}
