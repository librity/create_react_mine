import Block from '@/interfaces/Block'

import { updateNonce } from './UpdateBlocks'

const mine = (block: Block): Block => {
  var minedBlock = block

  while (true) {
    if (isMined(minedBlock)) break

    minedBlock = updateNonce(minedBlock, minedBlock.header.nonce + 1)
  }

  return minedBlock
}

const isMined = (block: Block): boolean => {
  const difficulty = block.header.difficulty
  const expectedZeroes = '0'.repeat(difficulty)
  const successfullyMined = block.hash.startsWith(expectedZeroes)
  if (!successfullyMined) return false

  return true
}

export { mine, isMined }
