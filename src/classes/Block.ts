import CryptoJS from 'crypto-js';
import Crypto from '../utils/Crypto';
import BlockHeader from './BlockHeader';

export default class Block {
  public header: BlockHeader;
  public index: number;
  public hash: string;
  public data: string;

  static buildGenesis = (difficulty: number): Block => {
    const index = 0;
    const previousHash = '';
    const data = 'GENESIS BLOCK';

    const genesis = new Block(index, previousHash, data, difficulty);
    return genesis;
  };

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  private constructor(
    index: number,
    previousHash: string,
    data: string,
    difficulty: number,
  ) {
    this.index = index;
    this.data = data;

    this.header = new BlockHeader(previousHash, data, difficulty);
  }

  setHash = () => (this.hash = this.header.hash());

  getDifficulty = (): number => this.header.difficulty;
  getPreviousHash = (): string => this.header.previousHash;

  buildNext = (data: string): Block => {
    const nextIndex: number = this.index + 1;

    const nextBlock = new Block(
      nextIndex,
      this.hash,
      data,
      this.getDifficulty(),
    );
    nextBlock.setHash();
    return nextBlock;
  };

  hasValidStructure = (): boolean => {
    if (typeof this.index !== 'number') return false;
    if (typeof this.hash !== 'string') return false;
    if (typeof this.data !== 'string') return false;

    return true;
  };

  isValid = (previous: Block): boolean => {
    if (!this.hasValidStructure) return false;
    if (previous.index + 1 !== this.index) return false;
    if (previous.hash !== this.getPreviousHash()) return false;
    if (this.hash !== this.setHash()) return false;

    return true;
  };
}
