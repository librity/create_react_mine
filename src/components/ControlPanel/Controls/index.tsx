import { useContext } from 'react'

import Crypto from '@/utils/Crypto'

import { BlockchainContext } from '@/contexts/BlockchainContext'

import { Input } from './Input'
import { Button } from './Button'
import { toast } from 'react-toastify'

export const Controls = () => {
  const {
    resetChain,
    addNextBlock,

    nextBlock,
    setData,
    setDifficulty,
    setNonce,

    mineNextBlock,
    nextBlockIsMined,
  } = useContext(BlockchainContext)

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == '') return

    const newDifficulty = Number.parseInt(e.target.value)
    setDifficulty(newDifficulty)
  }

  const handleNonceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == '') return

    const newNonce = Number.parseInt(e.target.value)
    setNonce(newNonce)
  }

  const handleMineBlock = () => {
    mineNextBlock()

    new Audio('/notifications/mine_bloc.wav').play()
    toast.success('Block successfully mined!')
  }

  const handleAddBlock = () => {
    if (!nextBlockIsMined) {
      new Audio('/notifications/error.mp3').play()
      toast.error(
        `Cannot add unmined block: Find the Nonce value that makes the hash start with '${'0'.repeat(
          nextBlock.header.difficulty,
        )}.'`,
      )
      return
    }

    addNextBlock()

    new Audio('/notifications/add_block.wav').play()
    toast.success('Block successfully added to the chain!')
  }

  const handleReset = () => {
    resetChain()

    new Audio('/notifications/reset_chain_2.mp3').play()
    toast.info('Chain reset, all blocks removed.')
  }

  return (
    <div className="ml-20">
      <Input
        type="text"
        name="data"
        placeholder="Block Data 🪨"
        onChange={handleDataChange}
      />

      <div className="flex mt-2">
        <Input
          type="number"
          name="difficulty"
          min="1"
          max="64"
          placeholder={`Difficulty 💪 (max ${Crypto.hashLength()})`}
          onChange={handleDifficultyChange}
        />
      </div>

      <div className="flex mt-2">
        <Input
          type="number"
          name="nonce"
          min="0"
          placeholder="Nonce 🪄"
          onChange={handleNonceChange}
        />

        <Button
          type="button"
          extraStyles={['bg-purple-500 ml-2']}
          onClick={handleMineBlock}
        >
          Mine ⛏️
        </Button>
      </div>

      <div className="flex mt-2">
        <Button
          type="button"
          extraStyles={[
            'bg-purple-500',
            nextBlockIsMined ? '' : 'opacity-50 cursor-not-allowed',
          ]}
          // disabled={!nextBlockIsMined}
          onClick={handleAddBlock}
        >
          Add Block 💎
        </Button>
      </div>

      <div className="flex mt-2">
        <Button
          type="button"
          extraStyles={['bg-red-500']}
          onClick={handleReset}
        >
          Reset Blockchain 🗑️
        </Button>
      </div>
    </div>
  )
}
