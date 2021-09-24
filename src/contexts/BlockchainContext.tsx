import { createContext, useState, useEffect } from 'react'

import Crypto from '@/utils/Crypto'

import Block from '@/interfaces/Block'

import { buildGenesis, buildFromPrevious } from '@/blockchain/BuildBlocks'
import {
  updateData,
  updateDifficulty,
  updateNonce,
} from '@/blockchain/UpdateBlocks'
import { mine, isMined } from '@/blockchain/MineBlocks'

interface BlockchainContextData {
  chain: Block[]
  addNextBlock: () => void
  resetChain: () => void

  nextBlock: Block
  setData: (data: string) => void
  setDifficulty: (difficulty: number) => void
  setNonce: (nonce: number) => void

  mineNextBlock: () => void
  nextBlockIsMined: boolean
}

export const BlockchainContext = createContext({} as BlockchainContextData)

export const BlockchainProvider = ({ children, ...rest }) => {
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const [chain, setChain] = useState<Block[]>([buildGenesis()])
  const [nextBlock, setNextBlock] = useState<Block>(buildFromPrevious(chain[0]))
  const [nextBlockIsMined, setNextBlockIsMined] = useState<boolean>(
    isMined(nextBlock),
  )

  useEffect(() => {
    setNextBlockIsMined(isMined(nextBlock))
  }, [nextBlock])

  const resetChain = () => {
    setChain([buildGenesis()])
    setNextBlock(buildFromPrevious(chain[0]))
  }

  const setData = (data: string) => {
    setNextBlock((oldBlock) => updateData(oldBlock, data))
  }

  const setDifficulty = (difficulty: number) => {
    if (difficulty == NaN) return
    if (difficulty < 1) return
    if (difficulty > Crypto.hashLength()) return

    setNextBlock((oldBlock) => updateDifficulty(oldBlock, difficulty))
  }

  const setNonce = (nonce: number) => {
    if (nonce == NaN) return

    setNextBlock((oldBlock) => updateNonce(oldBlock, nonce))
  }

  const mineNextBlock = () => {
    setNextBlock((oldBlock) => mine(oldBlock))
  }

  const addNextBlock = () => {
    if (!isMined(nextBlock)) return

    const newNextBlock = buildFromPrevious(nextBlock)
    setChain((oldChain) => [...oldChain, nextBlock])
    setNextBlock(newNextBlock)
  }

  return (
    <BlockchainContext.Provider
      value={{
        chain,
        addNextBlock,
        resetChain,

        nextBlock,
        setData,
        setDifficulty,
        setNonce,

        mineNextBlock,
        nextBlockIsMined,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  )
}
