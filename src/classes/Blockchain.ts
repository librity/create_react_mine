import Block from './Block'

export default class Blockchain {
  public nextBlock: Block

  private blocks: Block[]

  constructor() {
    this.blocks = [Block.buildGenesis()]
  }

  getDifficulty = (): number => this.nextBlock.getDifficulty()
  setDifficulty = (newDifficulty: number) =>
    this.nextBlock.setDifficulty(newDifficulty)
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

  createNextBlock = (data: string) => {
    this.setNextBlock(data)
    this.mineNextBlock()

    this.saveNextBlock()
  }

  setNextBlock = (data: string) => (this.nextBlock = this.buildNextBlock(data))
  buildNextBlock = (data: string): Block => {
    const previous = this.getLastBlock()
    const next = previous.buildNext(data)

    return next
  }

  mineNextBlock = () => this.nextBlock.mine()

  isNextBlockValid = (): boolean => this.nextBlock.isValid(this.getLastBlock())
  saveNextBlock = () => {
    if (!this.isNextBlockValid()) throw new Error("Next block isn't valid")

    this.blocks.push(this.nextBlock)
    this.setNextBlock('')
  }
}
