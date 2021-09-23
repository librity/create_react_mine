import { useContext } from 'react'

import Crypto from '@/utils/Crypto'

import { BlockchainContext } from '@/contexts/BlockchainContext'

import { Input } from './Input'
import { Button } from './Button'

export const Controls = () => {
  const {
    resetChain,

    setData,
    setDifficulty,
    setNonce,

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

        <Button type="button" extraStyles={['bg-purple-500']}>
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
          disabled={!nextBlockIsMined}
        >
          Add Block 💎
        </Button>
      </div>

      <div className="flex mt-2">
        <Button type="button" extraStyles={['bg-red-500']} onClick={resetChain}>
          Reset Blockchain 🗑️
        </Button>
      </div>
    </div>
  )
}
