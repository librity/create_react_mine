import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'

import Blockchain from '@/classes/Blockchain'
import Block from '@/classes/Block'

interface BlockchainContextData {
  chain: Block[]
  resetChain: () => void

  nextBlock: Block
  setData: (data: string) => void
  setDifficulty: (difficulty: number) => void
  setNonce: (nonce: number) => void
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

  const [chain, setChain] = useState<Block[]>([Block.buildGenesis()])
  const [nextBlock, setNextBlock] = useState(
    new Block(1, '', chain[0].hash, chain[0].header.difficulty),
  )

  const resetChain = () => {
    setChain([Block.buildGenesis()])
    setNextBlock(
      new Block(
        1,
        '',
        chain[0].hash,
        chain[0].header.difficulty,
      ),
    )
  }

  const setData = (data: string) => {
    setNextBlock((oldBlock) => {
      return new Block(
        oldBlock.index,
        data,
        oldBlock.header.previousHash,
        oldBlock.header.difficulty,
        oldBlock.header.nonce,
        oldBlock.header.timestamp,
      )
    })
  }

  const setDifficulty = (difficulty: number) => {
    setNextBlock((oldBlock) => {
      return new Block(
        oldBlock.index,
        oldBlock.data,
        oldBlock.header.previousHash,
        difficulty,
        oldBlock.header.nonce,
        oldBlock.header.timestamp,
      )
    })
  }

  const setNonce = (nonce: number) => {
    setNextBlock((oldBlock) => {
      return new Block(
        oldBlock.index,
        oldBlock.data,
        oldBlock.header.previousHash,
        oldBlock.header.difficulty,
        nonce,
        oldBlock.header.timestamp,
      )
    })
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
      }}
    >
      {children}
    </BlockchainContext.Provider>
  )
}
