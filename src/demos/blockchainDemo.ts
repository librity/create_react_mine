import Blockchain from '../classes/Blockchain'

const chain = new Blockchain()

const initializeBC = () => {
  console.log('\n=== Initialize Blockchain ===')

  console.log('Block count:', chain.getBlockCount())
  console.log('Blocks:', chain.getBlocks())
}

const addBlocks = () => {
  console.log('\n=== Add Blocks ===')

  chain.createNextBlock('Name: John Doe, SSN: 000-00-0000')
  console.log('Last Block:', chain.getLastBlock())

  chain.createNextBlock(
    'transaction: from Wallet 12u90inoh1ei, 200.00 USD, to Wallet 3i2091e1njid',
  )
  console.log('Last Block:', chain.getLastBlock())
}

const validateBlock = () => {
  console.log('\n=== Validate Block ===')

  const tamperedBlock = chain.setNextBlock(
    'transaction: from Wallet ij9j19n101al, 5.00 USD, to Wallet 1j22joosd142',
  )
  tamperedBlock.data =
    'transaction: from Wallet ij9j19n101al, 5,000,000.00 USD, to Wallet 1j22joosd142'
  try {
    chain.saveNextBlock()
  } catch (error) {
    console.error(error)
  }

  console.log('Last Block:', chain.getLastBlock())
}

const mineBlock = () => {
  console.log('\n=== Mine Block ===')

  chain.setNextBlock('Name: Wendigoon, SSN: 123-45-6789')
  console.log('Is Next Block valid?', chain.isNextBlockValid())
  console.log('Hash:', chain.nextBlock.hash)
  console.log('Difficulty:', chain.getDifficulty())

  console.log('Increasing difficulty to', chain.getDifficulty() + 1)
  chain.increaseDifficulty()

  console.log('Mining Next Block...')
  chain.mineNextBlock()
  console.log('Is Next Block valid?', chain.isNextBlockValid())
  console.log('Hash:', chain.nextBlock.hash)
  console.log('Saving Next Block...')
  chain.saveNextBlock()

  console.log('Last Block:', chain.getLastBlock())
}

const endState = () => {
  console.log('\n=== End State ===')

  console.log('Block count:', chain.getBlockCount())
  console.log('Blocks:', chain.getBlocks())
}

const blockchainDemo = () => {
  initializeBC()
  addBlocks()
  validateBlock()
  mineBlock()
  endState()
}

export default blockchainDemo
