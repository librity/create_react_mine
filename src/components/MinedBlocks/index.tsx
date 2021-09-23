import React, { useContext } from 'react'
import Block from '@/classes/Block'

import { BlockchainContext } from '@/contexts/BlockchainContext'

import { MinedBlock } from './MinedBlock'

export const MinedBlocks = () => {
  const { chain } = useContext(BlockchainContext)

  return (
    <section className="flex items-center flex-col bg-gray-200 min-h-screen">
      <h3 className="text-xl uppercase bg-white -mt-8 inline shadow-lg font-medium py-3 px-10 rounded-md">
        Mined Blocks
      </h3>

      <div className="grid grid-cols-3 w-full mt-20 gap-20 px-20">
        {chain.map((block: Block) => (
          <MinedBlock block={block} key={block.hash} />
        ))}
      </div>
    </section>
  )
}
