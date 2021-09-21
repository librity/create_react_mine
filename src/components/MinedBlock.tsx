import Block from '../classes/Block'

import styles from '../styles/components/MinedBlock.module.css'

export const MinedBlock = ({ block }) => (
  <div className={styles.container}>
    <h3>Block #{block.index}</h3>

    <div>Data: {block.data}</div>
    <div>Hash: {block.hash}</div>
    <br />

    <div>HEADER</div>
    <div>Data Hash: {block.header.dataHash}</div>
    <div>Difficulty: {block.header.difficulty}</div>
    <div>Nonce: {block.header.nonce}</div>
    <div>Previous Hash: {block.header.previousHash}</div>
    <div>Timestamp: {block.header.timestamp}</div>
  </div>
)
