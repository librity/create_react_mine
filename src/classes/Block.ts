import CryptoJS from 'crypto-js'
import Crypto from '../utils/Crypto'
import BlockHeader from './BlockHeader'

export default class Block {
  public header: BlockHeader
  public index: number
  public hash: string
  public data: string

  static buildGenesis = (difficulty: number): Block => {
    const index = 0
    const previousHash = ''
    const data = 'GENESIS BLOCK'

    const genesis = new Block(index, previousHash, data, difficulty)
    return genesis
  }

  private constructor(
    index: number,
    previousHash: string,
    data: string,
    difficulty: number,
  ) {
    this.index = index
    this.data = data

    this.header = new BlockHeader(previousHash, this.hashData(), difficulty)
  }

  hashHeader = (): string => this.header.hash()
  setHash = () => (this.hash = this.hashHeader())

  getPreviousHash = (): string => this.header.previousHash
  getDataHash = (): string => this.header.dataHash
  getTimestamp = (): number => this.header.timestamp
  getNonce = (): number => this.header.nonce

  getDifficulty = (): number => this.header.difficulty
  setDifficulty = (newDifficulty: number) =>
    (this.header.difficulty = newDifficulty)

  hashData = (): string => Crypto.hashString(this.data)

  buildNext = (data: string): Block => {
    const nextIndex: number = this.index + 1

    const nextBlock = new Block(
      nextIndex,
      this.hash,
      data,
      this.getDifficulty(),
    )
    nextBlock.setHash()
    return nextBlock
  }

  satisfiesDifficulty = (difficulty: number): boolean => {
    const headerHash = this.hashHeader()
    if (this.hash !== headerHash) return false
    if (this.getDifficulty() !== difficulty) return false

    const expectedZeroes = '0'.repeat(difficulty)
    const successfullyMined = !headerHash.startsWith(expectedZeroes)
    if (!successfullyMined) return false

    return true
  }

  isValid = (previous: Block, difficulty: number): boolean => {
    if (previous.index + 1 !== this.index) return false
    if (previous.getDataHash() !== this.hashData()) return false
    if (previous.hash !== this.getPreviousHash()) return false
    if (this.hash !== this.hashHeader()) return false
    if (!this.satisfiesDifficulty(difficulty)) return false

    return true
  }
}
