import Blockchain from '../classes/Blockchain'

const blockchainDemo = () => {
  console.log('\n=== Block chain ===')
  const blockchain = new Blockchain()

  console.log(blockchain.getBlocks())
  console.log(blockchain.getBlockCount())
  console.log(blockchain.getLastBlock())

  console.log('\n=== Add blocks ===')
  blockchain.createNext('Name: John Doe, SSN: 000-00-0000')
  console.log(blockchain.getLastBlock())
  blockchain.createNext(
    'transaction: from Wallet 12u90inoh1ei, 200.00 USD, to Wallet 3i2091e1njid',
  )
  console.log(blockchain.getLastBlock())

  console.log('\n=== Validate block ===')
  const tamperedBlock = blockchain.buildNext(
    'transaction: from Wallet ij9j19n101al, 5.00 USD, to Wallet 1j22joosd142',
  )
  tamperedBlock.data =
    'transaction: from Wallet ij9j19n101al, 5,000,000.00 USD, to Wallet 1j22joosd142'
  try {
    blockchain.saveNext(tamperedBlock)
  } catch (error) {
    console.error(error)
  }
  console.log(blockchain.getLastBlock())

  console.log('\n=== Final state ===')
  console.log(blockchain.getBlockCount())
  console.log(blockchain.getBlocks())
}

export default blockchainDemo
