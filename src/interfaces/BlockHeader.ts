export default interface BlockHeader {
  previousHash: string
  dataHash: string
  difficulty: number
  timestamp: number
  nonce: number
}
