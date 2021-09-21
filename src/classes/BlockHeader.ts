import Crypto from '../utils/Crypto'
import Timestamp from '../utils/Time'

export default class BlockHeader {
  public previousHash: string
  public dataHash: string
  public difficulty: number
  public timestamp: number
  public nonce = 0

  constructor(previousHash: string, dataHash: string, difficulty: number) {
    this.previousHash = previousHash
    this.dataHash = dataHash
    this.timestamp = Timestamp.now()
    this.difficulty = difficulty
  }

  hash = (): string => Crypto.hashInstance(this)
  increaseNonce = () => (this.nonce = this.nonce + 1)
}
