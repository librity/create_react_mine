import Block from './Block'

export default class Blockchain {
  public next: Block

  private blocks: Block[]

  constructor() {
    this.blocks = [Block.buildGenesis()]
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

  getBlocks = (): Block[] => this.blocks
  getBlockCount = (): number => this.blocks.length
  getLastBlock = (): Block => this.blocks[this.blocks.length - 1]

  buildNext = (data: string): Block => {
    const previous = this.getLastBlock()
    const next = previous.buildNext(data)

    return next
  }

  saveNext = (next: Block) => {
    const isValid = next.isValid(this.getLastBlock())
    if (!isValid) throw new Error("Next block isn't valid")

    this.blocks.push(next)
  }

  createNext = (data: string) => {
    this.next = this.buildNext(data)
    this.next.mine()

    this.saveNext(this.next)
  }
}
