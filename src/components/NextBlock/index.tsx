import { useContext } from 'react'

import styles from './NextBlock.module.css'

import { BlockchainContext } from '../../contexts/BlockchainContext'

import { Logo } from './Logo'

export const NextBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.options}>
        <Logo />

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>
      </div>
    </section>
  )
}
