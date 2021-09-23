import { createContext, useState, useEffect } from 'react'

import Crypto from '@/utils/Crypto'

import Block from '@/interfaces/Block'

import { buildGenesis, buildFromPrevious } from '@/blockchain/BuildBlocks'
import {
  updateData,
  updateDifficulty,
  updateNonce,
} from '@/blockchain/UpdateBlocks'
import { isMined } from '@/blockchain/MineBlocks'

interface BlockchainContextData {
  chain: Block[]
  resetChain: () => void

  nextBlock: Block
  setData: (data: string) => void
  setDifficulty: (difficulty: number) => void
  setNonce: (nonce: number) => void

  nextBlockIsMined: boolean
}

export const BlockchainContext = createContext({} as BlockchainContextData)

export const BlockchainProvider = ({ children, ...rest }) => {
  useEffect(() => {
    Notification.requestPermission()

    // new Audio('/notification_1.wav').play()
    // new Audio('/notification_2.wav').play()
    // new Audio('/notification_3.wav').play()
    // new Audio('/notification_4.wav').play()
    // new Audio('/notification_5.mp3').play()
  }, [])

  const [chain, setChain] = useState<Block[]>([buildGenesis()])
  const [nextBlock, setNextBlock] = useState<Block>(buildFromPrevious(chain[0]))
  const [nextBlockIsMined, setNextBlockIsMined] = useState<boolean>(
    isMined(nextBlock),
  )

  const resetChain = () => {
    setChain([buildGenesis()])
    setNextBlock(buildFromPrevious(chain[0]))
    setNextBlockIsMined(isMined(nextBlock))
  }

  const setData = (data: string) => {
    setNextBlock((oldBlock) => updateData(oldBlock, data))
    setNextBlockIsMined(isMined(nextBlock))
  }

  const setDifficulty = (difficulty: number) => {
    if (difficulty == NaN) return
    if (difficulty < 1) return
    if (difficulty > Crypto.hashLength()) return

    setNextBlock((oldBlock) => updateDifficulty(oldBlock, difficulty))
    setNextBlockIsMined(isMined(nextBlock))
  }

  const setNonce = (nonce: number) => {
    if (nonce == NaN) return

    setNextBlock((oldBlock) => updateNonce(oldBlock, nonce))
    setNextBlockIsMined(isMined(nextBlock))
  }

  return (
    <BlockchainContext.Provider
      value={{
        chain,
        resetChain,

        nextBlock,
        setData,
        setDifficulty,
        setNonce,

        nextBlockIsMined,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  )
}
