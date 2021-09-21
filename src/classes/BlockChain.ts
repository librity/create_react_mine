import Block from './Block';

export default class BlockChain {
  public difficulty = 2;

  private chain: Block[];

  constructor() {
    this.chain = [Block.buildGenesis(this.difficulty)];
  }

  getChain = (): Block[] => this.chain;
  blockCount = (): number => this.chain.length;
  lastBlock = (): Block => this.chain[this.chain.length - 1];

  buildNext = (data: string): Block => {
    const previous: Block = this.lastBlock();

    return previous.buildNext(data);
  };

  saveNext = (next: Block) => {
    const isValid = next.isValid(this.lastBlock());
    if (!isValid) throw new Error("Next block isn't valid");

    this.chain.push(next);
  };

  createNext = (data: string) => {
    const next = this.buildNext(data);
    this.saveNext(next);
  };
}
