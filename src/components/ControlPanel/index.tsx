import { useContext } from 'react'

import styles from './index.module.css'

import { BlockchainContext } from '../../contexts/BlockchainContext'

import { Controls } from './Controls'
import { NextBlock } from './NextBlock'

export const ControlPanel = () => {
  return (
    <section className={styles.container}>
      <Controls />

      <NextBlock />
    </section>
  )
}
