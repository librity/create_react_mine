import Crypto from '../utils/Crypto';
import Timestamp from '../utils/Time';

export default class BlockHeader {
  public previousHash: string;
  public dataHash: string;
  public difficulty: number;
  public timestamp: number;
  public nonce = 0;

  constructor(previousHash: string, data: string, difficulty: number) {
    this.previousHash = previousHash;
    this.dataHash = Crypto.hashString(data);
    this.timestamp = Timestamp.now();
    this.difficulty = difficulty;
  }

  hash = (): string => Crypto.hashInstance(this);
  incrementNonce = () => (this.nonce = this.nonce + 1);
}
