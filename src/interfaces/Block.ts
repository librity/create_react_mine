import BlockHeader from './BlockHeader'

export default interface Block {
  header: BlockHeader
  index: number
  hash: string
  data: string
}
