import { useContext } from 'react'

import styles from './index.module.css'

import { BlockchainContext } from '../../contexts/BlockchainContext'

import { Logo } from './Left/Logo'
import { Controls } from './Left/Controls'
import { NextBlock } from './Right/NextBlock'

export const ControlPanel = () => {
  return (
    <section className="bg-blue-800 flex justify-center items-center py-40 w-full">
      <div>
        <Logo />

        <Controls />
      </div>

      <NextBlock />
    </section>
  )
}
