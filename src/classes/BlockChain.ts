import Block from './Block'

export default class BlockChain {
  public next: Block

  private chain: Block[]

  constructor() {
    this.chain = [Block.buildGenesis(this.difficulty)]
  }

  getDifficulty = (): number => this.next.getDifficulty()
  increaseDifficulty = () => {
    this.next.setDifficulty()
  }
  decreaseDifficulty = () => (this.difficulty = this.difficulty - 1)

  getChain = (): Block[] => this.chain
  getBlockCount = (): number => this.chain.length
  getLastBlock = (): Block => this.chain[this.chain.length - 1]

  buildNext = (data: string) => {
    const previous = this.getLastBlock()
    const next = previous.buildNext(data)
  }

  saveNext = (next: Block) => {
    const isValid = next.isValid(this.getLastBlock(), this.difficulty)
    if (!isValid) throw new Error("Next block isn't valid")

    this.chain.push(next)
  }

  createNext = (data: string) => {
    const next = this.buildNext(data)
    this.saveNext(next)
  }
}
