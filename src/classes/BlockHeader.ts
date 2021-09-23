import Crypto from '../utils/Crypto'
import Timestamp from '../utils/Time'

export default class BlockHeader {
  public previousHash: string
  public dataHash: string
  public difficulty: number
  public timestamp: number
  public nonce: number

  constructor(
    previousHash: string,
    dataHash: string,
    difficulty: number,
    nonce: number,
    timestamp: number,
  ) {
    this.previousHash = previousHash
    this.dataHash = dataHash
    this.difficulty = difficulty
    this.timestamp = timestamp
    this.nonce = nonce
  }

  hash = (): string => Crypto.hashInstance(this)
  increaseNonce = () => (this.nonce = this.nonce + 1)
}
