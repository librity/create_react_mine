import Block from '../../classes/Block'
import Time from '../../utils/Time'

import styles from './MinedBlock.module.css'

interface MinedBlockProps {
  block: Block
}

export const MinedBlock = ({ block }: MinedBlockProps) => (
  <div className={styles.container}>
    <h2>Block #{block.index}</h2>

    <div>
      <div>Data: {block.data}</div>
      <div>Hash: {block.hash}</div>
      <div>Created at: {Time.unixToHuman(block.header.timestamp)}</div>
    </div>

    <h4>HEADER</h4>

    <div>
      <div>Data Hash: {block.header.dataHash}</div>
      <div>Difficulty: {block.header.difficulty}</div>
      <div>Nonce: {block.header.nonce}</div>
      <div>Previous Hash: {block.header.previousHash}</div>
      <div>Timestamp: {block.header.timestamp}</div>
    </div>
  </div>
)
