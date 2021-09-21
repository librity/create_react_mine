import Block from './Block'

export default class BlockChain {
  public next: Block

  private chain: Block[]

  constructor() {
    this.chain = [Block.buildGenesis()]
  }

  getDifficulty = (): number => this.next.getDifficulty()
  setDifficulty = (newDifficulty: number) =>
    this.next.setDifficulty(newDifficulty)
  increaseDifficulty = () => {
    const newDifficulty = this.getDifficulty() + 1

    this.setDifficulty(newDifficulty)
  }
  decreaseDifficulty = () => {
    const newDifficulty = this.getDifficulty() - 1

    this.setDifficulty(newDifficulty)
  }

  getChain = (): Block[] => this.chain
  getBlockCount = (): number => this.chain.length
  getLastBlock = (): Block => this.chain[this.chain.length - 1]

  buildNext = (data: string): Block => {
    const previous = this.getLastBlock()
    const next = previous.buildNext(data)

    return next
  }

  saveNext = (next: Block) => {
    const isValid = next.isValid(this.getLastBlock())
    if (!isValid) throw new Error("Next block isn't valid")

    this.chain.push(next)
  }

  createNext = (data: string) => {
    this.next = this.buildNext(data)
    this.next.mine()

    this.saveNext(this.next)
  }
}
