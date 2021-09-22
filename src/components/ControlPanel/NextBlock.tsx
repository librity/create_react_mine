import { useContext } from 'react'
import Time from '@/utils/Time'

import { BlockchainContext } from '@/contexts/BlockchainContext'

import { Divider } from '@/components/misc/Divider'

export const NextBlock = () => {
  const { nextBlock } = useContext(BlockchainContext)

  return (
    <div className="ml-20 overflow-ellipsis bg-white p-5 shadow-lg rounded-lg break-all">
      <h3 className="text-center text-2xl mb-5 font-medium underline">
        Block #{nextBlock.index}
      </h3>

      <div className="grid gap-1">
        <div>Data Hash: {nextBlock.header.dataHash}</div>
        <div>Difficulty: {nextBlock.header.difficulty}</div>
        <div>Nonce: {nextBlock.header.nonce}</div>
        <div>Previous Hash: {nextBlock.header.previousHash}</div>
        <div>Timestamp: {nextBlock.header.timestamp}</div>

        <Divider />

        <div>Data: {nextBlock.data}</div>
        <div>Hash: {nextBlock.hash}</div>
        <div>Created at: {Time.unixToHuman(nextBlock.header.timestamp)}</div>
      </div>
    </div>
  )
}
