import { useContext, useMemo } from 'react'

import { BlockchainContext } from '@/contexts/BlockchainContext'

export const Controls = () => {
  const { resetChain, setData, setDifficulty, setNonce } =
    useContext(BlockchainContext)

  const handleDataChange = (e) => {
    setData(e.target.value)
  }

  const handleDifficultyChange = (e) => {
    const newDiff = Number.parseInt(e.target.value)

    setDifficulty(newDiff)
  }

  const handleNonceChange = (e) => {
    const newDiff = Number.parseInt(e.target.value)

    setNonce(newDiff)
  }

  return (
    <div className="ml-20">
      <input
        type="text"
        name="data"
        placeholder="Block Data 🪨"
        className="
      w-full
      px-5
      text-lg
      py-3
      border border-transparent
      placeholder-gray-500
      focus:ring-2
      focus:ring-offset-2
      focus:ring-offset-gray-800
      focus:ring-white
      focus:border-white
      rounded-md"
        onChange={handleDataChange}
      />

      <div className="flex mt-2">
        <input
          type="number"
          name="difficulty"
          min="1"
          onChange={handleDifficultyChange}
          className="
            w-full
            px-5
            text-lg
            py-3
            border border-transparent
            placeholder-gray-500
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-800
            focus:ring-white
            focus:border-white
            rounded-md"
          placeholder="Difficulty 💪"
        />
      </div>

      <div className="flex mt-2">
        <input
          type="number"
          name="nonce"
          min="0"
          placeholder="Nonce 🪄"
          onChange={handleNonceChange}
          className="
        w-full
        px-5
        mr-2
        text-lg
        py-3
        border border-transparent
        placeholder-gray-500
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-gray-800
        focus:ring-white
        focus:border-white
        rounded-md"
        />

        <button
          type="button"
          className=" w-full text-white px-5 rounded-md block bg-purple-500"
        >
          Mine ⛏️
        </button>
      </div>

      <div className="flex mt-2">
        <button
          type="button"
          className="w-full
        cursor-pointer
        flex
        items-center
        justify-center
        px-5
        py-3
        border
        border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-indigo-500
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-gray-800
        focus:ring-indigo-500
        opacity-50
        cursor-not-allowed"
        >
          Add Block 💎
        </button>
      </div>

      <div className="flex mt-2">
        <button
          type="button"
          className="w-full
        cursor-pointer
        flex
        items-center
        justify-center
        px-5
        py-3
        border
        border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-red-500"
          onClick={resetChain}
        >
          Reset Blockchain 🗑️
        </button>
      </div>
    </div>
  )
}
