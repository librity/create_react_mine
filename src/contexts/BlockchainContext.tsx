import { createContext, useState, ReactNode, useEffect } from 'react'
import Blockchain from '../classes/Blockchain'

interface Block {
  type: 'body' | 'eye'
  description: string
  experience: number
}

interface BlockchainContextData {
  chain: Blockchain
  resetChain: () => void
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

  const [chain, setChain] = useState(new Blockchain())

  const resetChain = () => setChain(new Blockchain())

  return (
    <BlockchainContext.Provider
      value={{
        chain,
        resetChain,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  )
}
