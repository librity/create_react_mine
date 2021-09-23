import Crypto from '@/utils/Crypto'
import Time from '@/utils/Time'

import Block from '@/interfaces/Block'
import BlockHeader from '@/interfaces/BlockHeader'
import { mine } from './MineBlocks'

const BASE_DIFFICULTY = 2

const buildGenesis = (): Block => {
  const data = 'GENESIS BLOCK'

  const header: BlockHeader = {
    previousHash: '',
    dataHash: Crypto.hashString(data),
    difficulty: BASE_DIFFICULTY,
    timestamp: Time.now(),
    nonce: 0,
  }
  const unminedGenesis: Block = {
    header: header,
    index: 0,
    hash: Crypto.hashObject(header),
    data,
  }
  const minedGenesis = mine(unminedGenesis)

  return minedGenesis
}

const buildFromPrevious = (previousBlock: Block): Block => {
  const data = ''

  const header: BlockHeader = {
    previousHash: previousBlock.hash,
    dataHash: Crypto.hashString(data),
    difficulty: previousBlock.header.difficulty,
    timestamp: Time.now(),
    nonce: 0,
  }
  const block: Block = {
    header: header,
    index: previousBlock.index + 1,
    hash: Crypto.hashObject(header),
    data,
  }

  return block
}

export { buildGenesis, buildFromPrevious }
