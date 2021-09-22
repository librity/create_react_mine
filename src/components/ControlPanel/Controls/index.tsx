import { useContext } from 'react'

import styles from './index.module.css'

// import { BlockchainContext } from '../../contexts/BlockchainContext'

import { Logo } from './Logo'

export const Controls = () => {
  return (
    <div className={styles.container}>
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
  )
}
