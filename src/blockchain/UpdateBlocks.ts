import Crypto from '@/utils/Crypto'

import Block from '@/interfaces/Block'
import BlockHeader from '@/interfaces/BlockHeader'

const updateData = (oldBlock: Block, data: string): Block => {
  const newHeader: BlockHeader = {
    ...oldBlock.header,
    dataHash: Crypto.hashString(data),
  }
  const newBlock: Block = {
    ...oldBlock,
    header: newHeader,
    hash: Crypto.hashObject(newHeader),
    data,
  }

  return newBlock
}

const updateDifficulty = (oldBlock: Block, difficulty: number): Block => {
  const newHeader: BlockHeader = {
    ...oldBlock.header,
    difficulty,
  }
  const newBlock: Block = {
    ...oldBlock,
    header: newHeader,
    hash: Crypto.hashObject(newHeader),
  }

  return newBlock
}

const updateNonce = (oldBlock: Block, nonce: number): Block => {
  const newHeader: BlockHeader = {
    ...oldBlock.header,
    nonce,
  }
  const newBlock: Block = {
    ...oldBlock,
    header: newHeader,
    hash: Crypto.hashObject(newHeader),
  }

  return newBlock
}

export { updateData, updateDifficulty, updateNonce }
