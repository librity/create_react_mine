import BlockChain from './classes/BlockChain'

const blockchainDemo = () => {
  console.log('\n=== Block chain ===')
  const blockChain = new BlockChain()

  console.log(blockChain.getChain())
  console.log(blockChain.blockCount())
  console.log(blockChain.lastBlock())

  console.log('\n=== Add blocks ===')
  blockChain.createNext('Name: John Doe, SSN: 000-00-0000')
  console.log(blockChain.lastBlock())
  blockChain.createNext(
    'transaction: from Wallet 12u90inoh1ei, 200.00 USD, to Wallet 3i2091e1njid',
  )
  console.log(blockChain.lastBlock())

  console.log('\n=== Validate block ===')
  const tamperedBlock = blockChain.buildNext(
    'transaction: from Wallet ij9j19n101al, 5.00 USD, to Wallet 1j22joosd142',
  )
  tamperedBlock.data =
    'transaction: from Wallet ij9j19n101al, 5,000,000.00 USD, to Wallet 1j22joosd142'
  try {
    blockChain.saveNext(tamperedBlock)
  } catch (error) {
    console.error(error)
  }
  console.log(blockChain.lastBlock())

  console.log('\n=== Final state ===')
  console.log(blockChain.blockCount())
  console.log(blockChain.getChain())
}

export default blockchainDemo
